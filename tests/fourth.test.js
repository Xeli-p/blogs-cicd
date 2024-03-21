const bcrypt = require('bcrypt')
const User = require('../models/user')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const testHelper = require('../utils/test_helper')
const blogNote = require('../models/blogNote')

const user1 = {
    username:"pirkkis69",
    name:"Pirkko Hietanen",
    password:"mirkkis"
}

const login = {
    username:"pirkkis69",
    password:"mirkkis"
}

beforeEach(async () => {
    await User.deleteMany({})
    await api.post('/api/users')
    .send(user1)
    await blogNote.deleteMany({})
})

describe('blogs and users', function () {

    test('blog has an user', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const postBlog = {
            title: 'Better go to Statement Considered Harmful',
            author: 'Herkko W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5
        }


        await api.post('/api/blogs')
        .set({'Authorization': `Bearer ${authToken}`})
        .send(postBlog)
        .expect(201)

        const blogObject = await blogNote.findOne({})
        expect(blogObject._id).toBeDefined()
        expect(blogObject.user).toBeDefined()
        })
})