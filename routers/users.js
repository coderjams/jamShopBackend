const { User } = require('../models/product');
const express = require('express');
const router = express.Router();

//getting products from database 1st way async await
router.get('/', async (req, res) => {
    const userList = await User.find();
    if (!userList) {
        res.status(500).json({ success: false });
    }
    res.send(userList);
});

router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country
    });
    user = await user.save();
    if (!user) {
        return res.status(404).send('the user cannot be created!');
    }
    res.send(user);
});

module.exports = router;