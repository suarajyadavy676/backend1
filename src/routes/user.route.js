const {Router} = require("express")
const bcrypt = require('bcrypt')
const userModel = require("../models/user.model")

let userRouter = Router()

userRouter.post('/register',async(req,res)=>{
  let {password,email} = req.body
  let user = await userModel.findOne({email})
  if(user){
    return res.status(409).send("user already present")
  }
  try {
    bcrypt.hash(password, 10, async(err, hash)=> {
      if(err){
        return res.status(401).send("error password hashing time")
      }
      await userModel.create({...(req.body),password:hash})
      return res.send("user is register successfully")
  });
  } catch (error) {
    return res.status(401).send("something wrong in input field")
  }
})

module.exports = userRouter