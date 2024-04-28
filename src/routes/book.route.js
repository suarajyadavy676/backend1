const {Router} = require("express")
const bookModel = require("../models/book.model")
const auth = require("../middlewares/auth")
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
bookRouter.get('/',auth,async(req,res)=>{
  console.log(("token"))
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

//delete
bookRouter.delete('/:id',async(req,res)=>{
  const {id} = req.params
  try {
    await bookModel.findByIdAndDelete(id)
    res.send("book deleted successfully")
  } catch (error) {
    console.log('error in deleting time')
  }
})

module.exports = bookRouter