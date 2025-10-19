const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

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
}
 
module.exports = invCont