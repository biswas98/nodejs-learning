const express = require("express");
const router = express.Router();
const {
  handleGetUsersHtml,
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user.controller");

// Routes
router.get("/users", handleGetUsersHtml);

router.route("/").get(handleGetAllUsers).post(handlePostUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
