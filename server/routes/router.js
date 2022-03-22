const router = require('express').Router();
const userRoute = require('./user');
const authRoute = require('./auth');
const productRoute = require('./products');
const categoryRoute = require('./category');
const path = require('path');

router.get('/api/', (req, res) => {
    res.send('api')
})
router.use("/api/auth", authRoute);
router.use("/api/users", userRoute);
router.use("/api/products", productRoute);
router.use("/api/categories", categoryRoute);

// router.get("/api/storage", (req, res) => {
//     console.log(1)
//     res.sendFile(path.dirname('/storage/img/default.jpg'))
// })

module.exports = router;