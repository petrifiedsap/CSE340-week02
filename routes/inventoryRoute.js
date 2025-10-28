// Needed stuffs
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const { handleErrors } = require("../utilities");

//route to build inventory by classif view
router.get(
    "/type/:classificationId", 
    handleErrors(invController.buildByClassificationId)
);

router.get(
    "/detail/:invId", 
    handleErrors(invController.buildByInvId)
);

router.get(
    "/errorLink",
    handleErrors(invController.errorLink)
);
module.exports = router;