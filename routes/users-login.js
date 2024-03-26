const express = require('express');
const router = express.Router();

const {userLogin} = require('../controller/users');

router.post('/', (req,res) => userLogin(req, res))

module.exports = router;
