const mongoose = require("mongoose")



const userModel = new mongoose.Schema({
  name :{
    type : String,
    require : true
  },
  age : {
    type : Number,
    require : true
  },
  email : {
    type : String,
    require : true,
    unique : true
  },
  address : {
    type  : String,
    require : true
  }
})

const user = mongoose.model("user", userModel)

module.exports = user;