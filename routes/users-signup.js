const express = require('express');
const router = express.Router();

const { createUser, findUser} = require('../controller/users');


router.post('/', (req, res, next) => createUser(req, res, next));
router.get('/:id', (req, res) => findUser(req, res))



module.exports = router;
