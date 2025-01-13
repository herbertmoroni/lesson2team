const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');

router.get('/professional', professionalController.getData);

module.exports = router;