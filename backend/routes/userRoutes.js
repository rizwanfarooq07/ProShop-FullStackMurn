const express = require("express");
const router = express.Router();

const {
  authUsers,
  getUserProfile,
  registerUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/login", authUsers);
router.route("/profile").get(protect, getUserProfile);
router.route("/").post(registerUser);

module.exports = router;
