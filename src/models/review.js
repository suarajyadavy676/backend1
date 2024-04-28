const {Schema,model} = require('mongoose')
let reviewSchema = new Schema({
  auther:{type:String,required:true},
  title:{type:String,required:true}
})

let bookModel = model('user',userSchema)

module.exports = bookModel