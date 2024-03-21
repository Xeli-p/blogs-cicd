const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body

    if (!username || !password || !name){
        return response.status(400).json('{error: expected username, name and password to exist}')
    }

    if ((password.length || username.length) < 3) {
        return response.status(400).json('{error: expected username and password to contain at least 3 characters}')
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })

    try{
        const savedUser = await user.save()
        response.status(201).json(savedUser)
    }catch(err){
        response.status(400).json('{error: expected `username` to be unique}')
    }

})

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({}).populate('blogs', { url: 1, title: 1, author: 1 })
    response.json(users)
})

module.exports = usersRouter