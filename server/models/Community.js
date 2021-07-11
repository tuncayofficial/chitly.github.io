const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommunitySchema = new Schema({
    name : String,
    avatar : String,
    description : String,
    banner : String,
    members : Array
})

const Community = mongoose.model("Community", CommunitySchema)

module.exports = Community