const {Router} = require("express")
const bookModel = require("../models/book.model")
let bookRouter = Router()
//craete book
 bookRouter.post('/',async(req,res)=>{
  try {
    await bookModel.create(req.body)
    res.send("book created successfully")
  } catch (error) {
    console.log("error in book posting time")
  }
 })

 //read book
bookRouter.get('/',async(req,res)=>{
  try {
    return res.send(await bookModel.find())
  } catch (error) {
    console.log("error in book read operation time ")
  }
})

//update the book
bookRouter.patch('/:id',async(req,res)=>{
  let {id} = req.params
  console.log(req.body)
  try {
    await bookModel.findByIdAndUpdate(id,req.body)
    return res.send("book updated successfully")
  } catch (error) {
    console.log("error in updating time")
  }
})
module.exports = bookRouter