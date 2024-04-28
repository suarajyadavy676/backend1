const express = require('express')
const dbConnection = require('./src/config/db')
const userRouter = require('./src/routes/user.route')
const bookRouter = require('./src/routes/book.route')
require('dotenv').config()

const app = express()

let port = process.env.PORT || 4000

app.use(express.json())

//home route
app.get('/',(req,res)=>{
  return res.send('<h1>This is the Home route</h1>')
})
app.use('/user',userRouter)
app.use('/books',bookRouter)

app.listen(port,async()=>{
try {
  dbConnection()
  console.log(`server is running at ${port}`)
} catch (error) {
  console.log("error in listen")
}
})