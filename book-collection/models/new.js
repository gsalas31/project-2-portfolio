const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userNewSchema = new Schema(
    {
        name: { type: String, required:true },
        type:{ type: String, required: true },
        title: { type: String, required: true }   
    }
)

module.exports = mongoose.model('New', userNewSchema)
