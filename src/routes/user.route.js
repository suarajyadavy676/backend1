const {Router} = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require("../models/user.model")

let userRouter = Router()

//user registration route
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

//user login route
userRouter.post('/signIn',async(req,res)=>{
  let {email,password} = req.body
  let user = await userModel.findOne({email})
  try {
    if(!user){
      res.status(404).send("user is not found")
    }
    jwt.sign({userId:user._id},"masai",{ expiresIn: '1h' },(error,token)=>{
      if(error){
        return res.status(404).send("error in jwt sign part")
      }
      return res.send({msg:"token generated successfully",token})
    })
  } catch (error) {
    return res.status(401).send("something wrong")
  }
})

module.exports = userRouter