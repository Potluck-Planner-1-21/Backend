const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Items = require('./items-model');

router.get('/', async (req, res, next) => {
    try {
        const items = await Items.find();
        res.json(items);
    }
    catch (err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const item = await Items.findById(req.params.id);
        res.json(item);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;
