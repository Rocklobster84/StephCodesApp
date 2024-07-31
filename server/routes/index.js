const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { homeIndex } = require('../controllers/index');

/* GET home page. */
router.get('/', (asyncErrorHandler(homeIndex)));

module.exports = router;
