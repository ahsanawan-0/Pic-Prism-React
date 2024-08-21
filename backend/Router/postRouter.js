const router=require("express").Router();

router.get("/logout",(req,res)=>{
    res.send("user login succ....")
})


module.exports=router; 