const router = require('express').Router();
const sequelize = require('../db.js');
let user = sequelize.import('../models/user.js');
let playlist = sequelize.import('../models/playlist.js');

router.post('/', (req, res) => {
    let user = req.user
    let playlist = req.body.playlist.music
    
    playlist.create({
        owner: user.id,
        music: music
    }).then(
        function createSuccess(playlist) {
            res.json({
                music: playlist,
                message: 'Score added to playlist'
            })
        }, 
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

router.get('/', (req, res) => {
    let userid = req.user.id;

    userBreweries.findAll({where: {owner: userid}}).then(
        function findAllSuccess(data) {
            res.json(data)
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
    )
})

router.delete('/:id', (req, res) => {
    let dataID = req.params.id;

    userBreweries.destroy({where: {id: dataID}}).then(
        function deleteMusicPlaylist() {
            res.send("Score removed from playlist");
        },
        function deleteMusicPlaylist(err) {
            res.send(500, err.message)
        }
    )
})

router.put('/:id', (req, res) => {
    let user = req.user
    let data = req.params.id
    let playlist = req.body.playlist.music

    userBreweries.update({
        music: music
    }, {where: {id: data}}).then(
        function updateSuccess(updateData) {
            res.json(updateData)
        }, 
        function updateError(err) {
            res.send(500, err.message)
        }
    )
})

module.exports = router;