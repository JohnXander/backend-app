const express = require("express");
const { getUsers } = require('./controllerUser');

const router = express.Router();

router.get("/", getUsers);

module.exports = router;