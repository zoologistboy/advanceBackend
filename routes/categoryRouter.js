const express = require("express")
const { addNewCategory, allCategory } = require("../controllers/categoryController")

const categoryRouter = express.Router()

categoryRouter.post("/", addNewCategory)
categoryRouter.get("/", allCategory)

module.exports = categoryRouter