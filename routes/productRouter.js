const express = require("express")
const { addProducts, allProducts } = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const isSeller = require("../middlewares/isSeller")
const isVerifed = require("../middlewares/isVerified")
const upload = require("../middlewares/upload")

const productRouter = express.Router()


productRouter.post("/", isLoggedIn, isVerifed, isSeller, upload, addProducts)

productRouter.get("/", allProducts)


module.exports = productRouter