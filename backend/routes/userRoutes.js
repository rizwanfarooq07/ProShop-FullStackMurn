const express = require("express");
const router = express.Router();

const {
  authUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddlerware");

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
