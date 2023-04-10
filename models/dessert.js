const mongoose = require("mongoose")
const dessertSchema = mongoose.Schema({
    name: String,
    rating: Number,
    color: String
})
module.exports = mongoose.model("Dessert", dessertSchema)