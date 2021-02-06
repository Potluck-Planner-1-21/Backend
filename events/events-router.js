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

router.get('/:id/items', async (req, res, next) => {
    try {
        const items = await Events.findEventItems(req.params.id);
        res.json(items);
    }
    catch (err) { 
        next(err); 
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newEvent = await Events.add(req.body);
        res.status(201).json(newEvent);
    }
    catch (err) {
        next(err);
    }
})

router.post('/:eventId/item/:itemId', async (req, res, next) => {
    try {
        const item = await Events.addItemToEvent(req.params.eventId, req.params.itemId);
        res.json(item);
    }
    catch (err) {
        next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const event = await Events.updateEvent(req.params.id, req.body);
        res.json(event);
    }
    catch (err) {
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Events.remove(req.params.id);
        res.json({
            message: 'event removed',
        })
    }
    catch (err) {
        next(err);
    }
})

router.delete('/:eventId/item/:itemId', async (req, res, next) => {
    try {
        await Events.removeItemFromEvent(req.params.eventId, req.params.itemId);
        res.json({
            message: 'item removed',
        })
    }
    catch (err) {
        next(err);
    }
})



module.exports = router;
