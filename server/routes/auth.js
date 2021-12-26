const express = require("express");
const router = express.Router();
const registering = require('../models/RegisterModels')


router.post("/register", (req, res) => {
  const signUpUser = new registering ({
    name: require.body.name,
    last: require.body.last,
    email: require.body.email,
    password: require.body.password,
    confirm: require.body.confirm

  });
      signUpUser.save()
      .then(data =>{
        res.json(data)
      })
      .catch(error => {
        res.json(error)
      })
});
  module.exports = router;
  
