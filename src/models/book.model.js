const {Schema,model} = require('mongoose')
let bookSchema = new Schema({
  auther:{type:String,required:true},
  title:{type:String,required:true},
})

let bookModel = model('book',bookSchema)

module.exports = bookModel