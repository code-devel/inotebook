const express = require("express");
const User = require("../modules/User");
const router = express.Router();


router.post("/", (req, res) => {
  const user = User(req.body);
  user.save().then(()=>{
    console.log("data post successfull");
    res.send(req.body)
  });
  
});

module.exports = router;
