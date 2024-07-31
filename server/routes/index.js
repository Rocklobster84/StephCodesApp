const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { homeIndex } = require('../controllers/index');

/* GET home page. */
router.get('/', (asyncErrorHandler(homeIndex)));

// New Route
router.get('/new', asyncErrorHandler(homeNew));

// Create Route
router.post("/", asyncErrorHandler(homeCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(homeShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(homeEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(homeEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(homeUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(homeDestroy));

module.exports = router;
