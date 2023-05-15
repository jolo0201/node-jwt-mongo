const express = require("express");
const router = express.Router();

//Routes
router.use("/app", require("../controllers/user.controller"));

module.exports = router;
