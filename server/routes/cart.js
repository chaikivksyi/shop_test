const router = require("express").Router();
const Product = require("../models/Product");

router.get('/all', async (req, res) => {
    // console.log(req.cookies)
    // res.send('2')
})

router.put('/toggle', async (req, res) => {
    const {id, status} = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { "wish": status }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;