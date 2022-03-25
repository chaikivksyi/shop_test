const Product = require("../models/Product");
const router = require("express").Router();
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

router.post('/upload-image', upload.single('img'), function (req, res, next) {
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.file.path}" /><br>`
    return res.send(response)
})

//CREATE
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    console.log(req.body)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/detail/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const page = req.query.page - 1;
    const limit = req.query.limit;
    const category = req.query.category

    try {
        let products = null;
        let count = 0;
        if(category === 'all') {
            products = await Product.find().skip(page * limit).limit(limit);
            count = await Product.find().count();
        }else {
            products = await Product.find({ category: category }).skip(page * limit).limit(limit);
            count = await Product.find({ category: category }).count();
        }
        res.status(200).json({
            obj: products,
            count: count
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;