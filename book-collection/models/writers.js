const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writerSchema = new Schema(
    {
        name: { type: String, required: true },
        portraitURL: { type: String, required: true },
        bio: [
            {
                year: String,
                description: {type:String, required:true}
            }
             ]
    }
)

module.exports = mongoose.model('Writer', writerSchema)