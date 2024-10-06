const user = require("../models/userModel");

async function createUser(req, res) {
  const body = req.body;
  const newUser = await user.create({
    name: body.name,
    age: body.age,
    email: body.email,
    address: body.address,
  });
  return res
    .status(201)
    .json({ msg: "User Created Succesfully", CreatedUser: newUser });
}

async function showAllUsers(req, res) {
  let allUsers = await user.find({});
  let users = `${allUsers
    .map((item) => `<p>Name : ${item.name} - Email : ${item.email} </p> `)
    .join("")}`;
  return res.send(users);
}

async function getAllUsers(req, res) {
  let allUsers = await user.find({});
  res.json(allUsers);
}

async function getUserById(req, res) {
  let User = await user.findById(req.params.id);
  if (!User) return res.json({ error: "User not Found" });
  return res.json(User);
}

async function getUserByIdAndUpdate(req, res) {
  let User = await user.findByIdAndUpdate(req.params.id, { name: "Alex" });
  return res.json({ Status: "changed successfully", UpdatedUser : User.name});
}

async function deleteUserById(req, res) {
  let User = await user.findByIdAndDelete(req.params.id);
  return res
    .status(201)
    .json({ status: "User Deleted Successfully", DeletedUser: User.name });
}

module.exports = {
  showAllUsers,
  getAllUsers,
  getUserById,
  getUserByIdAndUpdate,
  deleteUserById,
  createUser,
};
