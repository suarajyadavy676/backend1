const {Schema,model} = require('mongoose')
let reviewSchema = new Schema({
  review:{type:String,required:true}
})

let reviewModel = model('user',reviewSchema)

module.exports = reviewModel