const express = require("express");
const router = express.Router();
const userController = require("../Controllers/usercontrollers");
const Auth = require("../Middlewares/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/googleSignup", userController.googleSignup);
router.post("/Googellogin", userController.googleLogin);
router.get("/profil", Auth, userController.getAllUsers);
router.put("/updateUserprofil", Auth, userController.updateUser);
// auth.js
router.get("/checkAuth", Auth, userController.checkAuth);
router.post("/logout", Auth, userController.logout);

module.exports = router;
