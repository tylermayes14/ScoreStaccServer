const router = require('express').Router();
const sequelize = require('../db.js');
let user = sequelize.import('../models/user.js');
let sheetMusic = sequelize.import('../models/sheetMusic.js');

router.get('/', (req, res) => {
    sheetMusic.findAll().then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
    ) 
})

module.exports = router;