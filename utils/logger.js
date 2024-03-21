const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') { 
        console.log(...params)
    }
}

const error = (err, _request, response, _next) => {
    if (process.env.NODE_ENV !== 'test') { 
        console.error(err.message);
    }

    if (err.name === 'CastError') {
        return response.status(400).json({ error: 'Malformatted id' })
    } else if (err.name === 'ValidationError') {
        return response.status(400).json({ error: err.message })
    } else if (err.name === 'JsonWebTokenError') {
        return response.status(401).json({ error: 'Invalid token' })
    } else if (err.name === 'TokenExpiredError') {
        return response.status(401).json({ error: 'Token expired' })
    } else if (err.name === 'InvalidTokenError') {
        return response.status(401).json({ error: 'Invalid token' })
    }

    // next(err);
}

module.exports = {
    info, error
}