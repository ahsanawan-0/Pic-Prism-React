const { signup, login,otp} = require("../controller/authController");

const router=require("express").Router();

router.post("/signup",signup)
router.post("/login",login)
router.post('/verify',otp)


module.exports=router;