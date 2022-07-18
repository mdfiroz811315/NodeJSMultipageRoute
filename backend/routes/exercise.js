const router = require("express").Router();
router.route("/").get((req,res)=>{
    res.send('I am in Exercise')
});
router.route("/getExerercise").get((req,res)=>{
    res.send('swimming,dancing')
});
router.route("/getExerercise").post((req,res)=>{
    res.send('swimming,dancing,using post')
});
module.exports = router;