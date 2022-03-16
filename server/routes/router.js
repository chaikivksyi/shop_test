const router = require('express').Router();
const userRouter = require('./user');

router.get('/api/', (req, res) => {
    res.send('api')
})
router.use('/api/user', userRouter);

module.exports = router;