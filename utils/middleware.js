const jwt = require('jsonwebtoken')
const User = require('../models/user')



const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '')
    }
    return null
}

const tokenExtractor = (request, response, next) => {
    request.token = getTokenFrom(request)
    next()
}

const getUserFrom = async(request) => {
    const token = request.token
    if (!token) {
        return null
    }
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!decodedToken){
        return null
    }
    const user = await User.findById(decodedToken.id)
    return user
}

const userExtractor = async(request, response, next) => {
    request.user = await getUserFrom(request)
    next()
}

module.exports = {
    tokenExtractor,
    userExtractor
}