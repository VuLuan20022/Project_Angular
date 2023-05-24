const express = require('express');
const router = express.Router();

const registeController = require('../app/controllers/RegisterController');

router.post('/', registeController.register);

module.exports = router;