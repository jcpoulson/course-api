const express = require('express');
const router = express.Router();

// Models
const User = require('../models').User
const Course = require('../models').Course

router.get('/', (req, res) => {
    res.send("Welcome to the API root route")
})

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    users.map(user => console.log(user))
    res.json(users)
    res.status(200).end()
})

router.post('/users', async (req, res, next) => {
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    })
    res.status(201).end()
})

router.get('/course', async (req, res) => {
    const courses = await Course.findAll();
    courses.map(course => console.log(course));
    res.json(courses)
    res.status(200).end()
})

module.exports = router