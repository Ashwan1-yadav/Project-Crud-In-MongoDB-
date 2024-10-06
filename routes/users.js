const express = require("express");
const router = express.Router();
const {
  showAllUsers,
  getAllUsers,
  getUserById,
  getUserByIdAndUpdate,
  deleteUserById,
  createUser,
} = require("../controllers/userControllers");

router.route("/").get(showAllUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(getUserByIdAndUpdate)
  .delete(deleteUserById);

router.get("/api/usersData", getAllUsers);

module.exports = router;
