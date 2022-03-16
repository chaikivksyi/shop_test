const router = require('express').Router();
const userRoute = require('./user');
const authRoute = require('./auth');
const productRoute = require('./products');

router.get('/api/', (req, res) => {
    res.send('api')
})
router.use("/api/auth", authRoute);
router.use("/api/users", userRoute);
router.use("/api/products", productRoute);

module.exports = router;