const express = require('express');
const router = express.Router();
const controllers = require("../controllers/blogController");

router.post('/blog', controllers.createBlog);
router.get('/blogs', controllers.listAllBlogs);
router.get('/blogs/:id', controllers.getBlog);

module.exports = router;