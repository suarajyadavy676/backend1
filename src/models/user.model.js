const {Schema,model} = require('mongoose')
let userSchema = new Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true}
})

let userModel = model('user',userSchema)

module.exports = userModel