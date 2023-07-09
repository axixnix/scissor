const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    UrlCode:String,
    UrlCode:String,
    UrlCode:String,
    Date:{type:String,default:Date.now}

})

module.exports =mongoose.model('Url',UrlSchema)