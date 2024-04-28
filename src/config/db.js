const { connect} = require("mongoose");

const dbConnection = async () =>{
  try {
    await connect(process.env.DB_URL)
    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected")
  }
}

module.exports = dbConnection