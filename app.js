const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("Welcome to User Management Server")
})

const { DBconnection } = require("./DBconnection");
const { eventLogs } = require("./middlewares/logs");

const userRouter = require("./routes/users");

DBconnection("mongodb://127.0.0.1:27017/testDB");

app.use(express.urlencoded({ extended: false }));
app.use("/users", userRouter);
app.use(eventLogs("logs.txt"));

app.listen(port, () => {
  console.log("server is running ->");
  console.log(`http://localhost:${port}`);
});
