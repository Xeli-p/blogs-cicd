const User = require('../models/user')
const Blog = require('../models/blogNote')

// ...

const nonExistingId = 'afjdk3j426jh42h6jk6g267kj'

const blogsInDb = async () => {
    const users = await Blog.find({})
    return users.map(u => u.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    nonExistingId,
    blogsInDb,
    usersInDb,
}