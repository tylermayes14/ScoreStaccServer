const jwt = require('jsonwebtoken')
const db = require('../db')
const validateSession = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    } else {
    const token = req.headers.authorization
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (!err && decodedToken) {
            db.users.findOne({
                    where: {
                        id: decodedToken.id
                    }
                }, console.log(decodedToken))
                .then(user => {
                    if (!user) throw 'err'
                    req.user = user
                    return next()
                })
                .catch(err => next(err))
        } else {
            req.errors = err
            return res.status(500).send('Not authorized');
        }
    })
}}
module.exports = validateSession
