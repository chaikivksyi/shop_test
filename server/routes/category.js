const Category = require("../models/Category");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {

    const newCategory = await new Category({
        name: req.body.name
    });
    console.log(newCategory)
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedProduct);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Category has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
// router.get("/detail/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    try {
        let categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;