const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('./users-model');

router.post('/register', async (req, res, next) => {
      try {
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;

        if(!name || !password || !email) {
          return res.status(400).json({
            message: 'username and password required',
          })
        }

        const user = await Auth.findByUsername(name).first();
        if (user) {
          return res.status(409).json({
            message: 'username taken',
          })
        }

        const newUser = await Auth.add({
          name,
          password: await bcrypt.hash(password, 14),
          email,
        })
        res.status(201).json(newUser);
      }
      catch (err) {
        next(err);
      }

});

router.post('/login', async (req, res, next) => {
      try {
        const name = req.body.name;
        const password = req.body.password;

        if (!name || !password) {
          return res.status(400).json({
            message: 'name and password required',
          })
        }

        const user = await Auth.findByUsername(name).first();
        if (!user) {
          return res.status(400).json({
            message: 'invalid credentials',
          })
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          return res.status(400).json({
            message: 'invalid credentials',
          })
        }

        const token = jwt.sign({
          userId: user.id,
        }, process.env.JWT_SECRET);

        res.cookie('token', token);

        res.json({
          message: `welcome, ${user.name}`,
          token,
        })

      }
      catch (err) {
        next(err);
      }
});

module.exports = router;
