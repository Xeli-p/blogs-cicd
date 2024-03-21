const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

const listHelper = require('../utils/list_helper')
const blogNote = require('../models/blogNote')

const listWithManyBlogs3 = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'asssger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
    },
    {
        title: 'Go To Safdadent Considered Harmful',
        author: 'assger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
    },
    {
        title: 'agdsu Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 3
    },
    {
        title: 'agdgadgagdt Considered Harmful',
        author: 'afdadfW. Dijkstra',
        url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
        likes: 2
    },
    {
        title: 'agdgadgagdt Considered Harmful',
        author: 'afdadfW. Dijkstra',
        url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
        likes: 24
    },
    {
        title: 'agdgadgagdt Considered Harmful',
        author: 'adadadadfW. Dijkstra',
        url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
        likes: 21
    }
]

const exampleUser = {
    username:"herkkoperkko",
    password: "sellainen",
    name: "Herg"
}

const login = {
    username:"herkkoperkko",
    password: "sellainen"
}

beforeEach(async () => {
    await User.deleteMany({})
    await api.post('/api/users')
        .send(exampleUser)
    await blogNote.deleteMany({})
    let blogObject = new blogNote(listWithManyBlogs3[0])
    await blogObject.save()
    blogObject = new blogNote(listWithManyBlogs3[1])
    await blogObject.save()
})

describe('network testing',  () => {
    test('notes are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('there are two notes', async () => {
        const response = await api
            .get('/api/blogs')
            .expect(200)

        expect(response.body).toHaveLength(2)
    })

    test('A blog has an id', async () => {
        const response = await api.get('/api/blogs')

        const contents = response.body.map(r => r.id)

        expect(contents[0]).toBeDefined()
    })
})

describe('post stuff', function () {

    test('A blog can be POSTed', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const response1 = await api.get('/api/blogs')
        expect(response1.body).toHaveLength(2)

        const postBlog = {
            title:
                "Go To Statement Considered Harmful",
            author:
                "asssger W. Dijkstra",
            url:
                "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Consider…",
            likes:
                5
        }

        await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog)
            .expect(201)

        const response2 = await api.get('/api/blogs')
        expect(response2.body).toHaveLength(3)
    })

    test('new blog cant be added without a token', async () => {

        const postBlog2 = {
            title:
                "Go To Statement Considered Harmful",
            author:
                "Herkko",
            url:
                "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Consider…",
        }

        await api.post('/api/blogs')
            .send(postBlog2)
            .expect(401)
    })


    test('a posts likes default value is 0', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const postBlog2 = {
            title:
                "Go To Statement Considered Harmful",
            author:
                "Herkko",
            url:
                "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Consider…",
        }

        await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog2)
            .expect(201)

        const response = await api.get('/api/blogs')
     //   console.log(response.body)
        const filtered = response.body.filter((blog) => blog.author === "Herkko")
        console.log(`${filtered} ${filtered[0]} `)
        expect(filtered[0].likes).toEqual(0)
    })

    test('urless or titleless cant be posted', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const postBlog3 = {
            author:
                "Herkko",
            url:
                "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Consider…"
        }

        const postBlog4 = {
            title:
                "Go To Statement Considered Harmful",
            author:
                "Herkko"
        }

        await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog3)
            .expect(400)

        await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog4)
            .expect(400)

    })

});

describe('delete stuff', function () {
    test('post can be deleted', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const postBlog6 = {
            title:
                "Pirkon marjasteluvinkit",
            author:
                "Taavi",
            url:
                "www.adgadkjpgsdagdas.com",
        }

        const response = await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog6)
            .expect(201)

        const id = response.body.id
        console.log(id)

        await api.delete(`/api/blogs/${id}`)
            .set({'Authorization': `Bearer ${authToken}`})
            .expect(204)

        const response2 = await api.get('/api/blogs')
        const results2 = response2.body.map(blog => blog.author)
        expect(results2).toHaveLength(2)

    })
})

describe('edit stuff', function () {
    test('post can be edited', async () => {

        const auth = await api.post('/api/login')
        .send(login)
        .expect(200)

        const authToken = auth.body.token

        const postBlog7 = {
            title: 'Better go to Statement Considered Harmful',
            author: 'Herkko W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5
        }

        const postBlog8 = {
            title: 'Dont go to Statement Considered Harmful',
            author: 'Herkko W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 9
        }

        const response = await api.post('/api/blogs')
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog7)
            .expect(201)

        const id = response.body.id
        console.log(id)

        await api.put(`/api/blogs/${id}`)
            .set({'Authorization': `Bearer ${authToken}`})
            .send(postBlog8)
            .expect(204)

        const response2 = await api.get('/api/blogs')

        const updatedBlog = response2.body.find(blog => blog.id === id);
        expect(updatedBlog).toBeDefined();
        expect(updatedBlog.title).toBe('Dont go to Statement Considered Harmful');
        expect(updatedBlog.likes).toBe(9);

    })
})

afterAll(async () => {
    await mongoose.connection.close()
})