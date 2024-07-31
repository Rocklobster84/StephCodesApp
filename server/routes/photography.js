const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { photography } = require('../controllers/photography');

/* GET home page. */
router.get('/', (asyncErrorHandler(photography)));

module.exports = router;
