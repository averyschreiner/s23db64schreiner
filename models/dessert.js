const mongoose = require("mongoose")
const dessertSchema = mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    color: String
})
module.exports = mongoose.model("Dessert", dessertSchema)