const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { photography, photographyNew, photographyCreate, photographyShow, photographyEdit, photographyEditForm, photographyUpdate, photographyDestroy } = require('../controllers/photography');

/* GET home page. */
router.get('/', (asyncErrorHandler(photography)));

// New Route
router.get('/new', (asyncErrorHandler(photographyNew)));

// Create Route
router.post("/", (asyncErrorHandler(photographyCreate)));

// Show Route
router.get("/:slug", (asyncErrorHandler(photographyShow)));

// Edit Route
router.get("/page/edit", (asyncErrorHandler(photographyEdit)));

// Individual Edit Route - Shows form
router.get("/page/:id", (asyncErrorHandler(photographyEditForm)));

// Update Route
router.put("/page/:id", (asyncErrorHandler(photographyUpdate)));

// Destroy Route
router.delete("/page/:id", (asyncErrorHandler(photographyDestroy)));
module.exports = router;
