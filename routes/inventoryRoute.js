// Needed stuffs
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

//route to build inventory by classif view
router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;