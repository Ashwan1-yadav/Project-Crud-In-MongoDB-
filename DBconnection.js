const mongoose = require("mongoose")

const DBconnection = async (url) => {
   return mongoose.connect(url).then(() => console.log("Connected to Database")).catch((err)=>{console.log("Database Error -> ",err)})
}

module.exports ={
    DBconnection,
}