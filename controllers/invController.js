const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

// build inventory by classification
invCont.buildByClassificationId = async function (req, res, next) {
    const classification_id = req.params.classificationId
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification", {
        title: className + " vehicles",
        nav,
        grid,
    })
};

// build inventory by classification
invCont.buildByInvId = async function (req, res, next) {
    const inv_id = req.params.invId
    const data = await invModel.getInventoryByInvId(inv_id)
    const grid = await utilities.buildItemGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].inv_make 
    const classModel = data[0].inv_model
    res.render("./inventory/item", {
        title: className + " " + classModel,
        nav,
        grid,
    })
};

// for the error
invCont.errorLink = async function (req, res, next) {
    const error = new Error("Without a bye your leave or have an error!");
    error.status = 500;
    throw error;
};

module.exports = invCont