const {jwtSecret} = require('./secrets');
const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const payload = {
        username: user.username,
        role: 'admin'
    }
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, jwtSecret, options)
}