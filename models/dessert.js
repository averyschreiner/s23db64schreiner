const mongoose = require("mongoose")
const dessertSchema = mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function(v) {
                return v.trim().split(' ').length === 1
            }
        }
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    color: String
})
module.exports = mongoose.model("Dessert", dessertSchema)