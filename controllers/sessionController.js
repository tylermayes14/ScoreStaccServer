let router = require('express').Router();
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let sequelize = require('../db.js');
let User = sequelize.import('../models/user.js');

router.post('/', (req, res) => {
    
    User.findOne({where:{username: req.body.user.username}}).then(
        function(user) {
            if(user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {
                    if(matches) {
                        var token = jwt.sign({id: user.id}, 'Secret', {expiresIn:60*60*24});
                        res.json({
                            user: user,
                            message: "Successfully authenticated ",
                            sessionToken: token
                        });
                    } else {
                        res.status(500).send({error: "Not authenticated"})
                    }
                })
            } else {
                res.status(500).send({error: "User does not exist"})
            }
        }, 
        function(err) {
            res.json(err);
        }
    )
})

module.exports = router;