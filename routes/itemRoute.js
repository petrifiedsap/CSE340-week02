// Needed stuffs
const express = require("express")
const router = new express.Router()
const itemController = require("../controllers/itemController")

//route to build inventory by classif view
router.get("/detail/:invId", itemController.buildByInvId);

module.exports = router;
