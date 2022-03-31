const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')
const cookieSession = require('cookie-session')

router.post('/register', async (req, res) => {
    console.log(1)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })

    console.log(user)

    const result = await user.save()

    const {password, ...data} = await result.toJSON()

    res.send(data)
})

router.post('/login', async (req, res) => {

    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'invalid credentials'
        })
    }

    const token = jwt.sign({_id: user._id}, process.env.JWT_SEC)

    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 9999999),
        sameSite: 'strict',
        httpOnly: true
    });

    res.send({
        message: 'success'
    })
})

router.get('/user', async (req, res) => {
    console.log(req.cookies)
    try {
        const cookie = req.cookies['jwt']
        console.log(req.cookies)

        const claims = jwt.verify(cookie, process.env.JWT_SEC)

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user = await User.findOne({_id: claims._id})

        const {password, ...data} = await user.toJSON()

        res.send(data)
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

router.get('/logout', (req, res) => {
    res.cookie('jwt', 'token', {
        expires: new Date(Date.now())
    });

    res.send({
        message: 'success'
    })
})




module.exports = router;