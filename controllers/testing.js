const router = require('express').Router()
const blogNote = require('../models/blogNote')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
    await blogNote.deleteMany({})
    await User.deleteMany({})   
    response.status(204).end()
})

module.exports = router