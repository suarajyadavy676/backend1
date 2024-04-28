const jwt = require('jsonwebtoken')
let auth  = (req,res,next)=>{
  let token = req.headers.authorization.split(" ")[1]
  if(!token){
    return res.send(400).send("token is not provided")
  }
  jwt.verify(token,process.env.SECRET,(err,decode)=>{
    if(err){
      return res.send("token is not correct")
    }
    req.user = decode
    next()
  })
}

module.exports = auth