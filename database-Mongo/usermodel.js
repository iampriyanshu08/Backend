const mongoose = require('mongoose')
mongoose.connect(`mongodb://127.0.0.1:27017/mongoprac`)


const userSchema = mongoose.Schema({
    pass:'String',
    username:'String',
    email:'String',
    name:'String'
})


module.exports = mongoose.model('user',userSchema)