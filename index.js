const express = require('express')
const dbConnection = require('./src/config/db')
require('dotenv').config()

const app = express()

let port = process.env.PORT || 4000

app.use(express.json())

//home route
app.get('/',(req,res)=>{
  return res.send('<h1>This is the Home route</h1>')
})

app.listen(port,async()=>{
try {
  dbConnection()
  console.log(`server is running at ${port}`)
} catch (error) {
  console.log("error in listen")
}
})