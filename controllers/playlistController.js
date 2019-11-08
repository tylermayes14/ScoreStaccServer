const router = require('express').Router();
const Playlist = require('../db').import('../models/playlist');

// Get All
router.get('/', (req, res) => {
    Playlist.findAll()
    .then(playlist => res.status(200).json(playlist))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.post('/', (req, res) => {
    const musicBySkill = {
        skillLevel: req.body.skillLevel
    }

    Playlist.create(musicBySkill)
    .then(playlist => res.status(200).json(playlist))
    .catch(err => res.json(req.errors));
})

router.get('/:name', (req, res) => {
    Playlist.findOne({
        where: {
            nameOfScore: req.params.nameOfScore
        }
    })
    .then(playlist => res.status(200).json(playlist))
    .catch(err => res.status(500).json({
        error: err
    }))
    console.log(req);
})

router.put('/:id', (req, res) => {
    Playlist.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(playlist => res.status(200).json(playlist))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.delete('/:id', (req, res) => {
    Playlist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(playlist => res.status(200).json(playlist))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;