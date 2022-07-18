const router = require("express").Router();

router.route("/").get((req,res)=>{
    res.send('I am in user')
});
router.route("/add").get((req,res)=>{
    res.send('I am in add')
});
router.route("/postAdd").post((req,res)=>{
    res.send('I am in add')
});
router.route("/update").get((req,res)=>{
    res.send('I am in Update')
});
router.route("/delete").get((req,res)=>{
    res.send('I am in user delete')
});

module.exports = router;