const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Events = require('./events-model');

router.get('/', async (req, res, next) => {
    try {
        const events = await Events.find();
        res.json(events);
    }
    catch (err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const event = await Events.findById(req.params.id);
        res.json(event);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;
