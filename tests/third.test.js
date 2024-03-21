const bcrypt = require('bcrypt')
const User = require('../models/user')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const testHelper = require('../utils/test_helper')

beforeEach(async () => {

    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({
        username: 'Kalsu',
        passwordHash
    })

    await user.save()
})

describe('user testing', () => {

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await testHelper.usersInDb()

        const newUser = {
            username: 'mluukkai',
            name: 'Matti Luukkainen',
            password: 'salainen'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await testHelper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await testHelper.usersInDb()

        const newUser = {
            username: 'Kalsu',
            name: 'Kalle',
            password: 'asdfasdf',
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body).toContain('expected `username` to be unique')

        const usersAtEnd = await testHelper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('creation fails with a invalid username and password', async () => {
        const newUser = {
            username: 'root',
            name: 'Superuser',
            password: 'sa',
        }

        const resp = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(resp.body).toContain('{error: expected username and password to contain at least 3 characters}')

        const newUser2 = {
            username: '',
            name: 'Superuser',
            password: 'salainen',
        }

        const resp2 = await api
            .post('/api/users')
            .send(newUser2)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(resp2.body).toContain('{error: expected username, name and password to exist}')

        const newUser3 = {
            username: 'AS',
            name: 'Superuser',
            password: '',
        }

        const resp3 = await api
            .post('/api/users')
            .send(newUser3)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(resp3.body).toContain('{error: expected username, name and password to exist}')

    })

})