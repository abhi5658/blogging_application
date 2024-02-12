const blogService = require('../services/blogService')

module.exports.createBlog = async (req, res, next) => {
    const { uuid, title, image, body, author } = req.body;

    const blog = await blogService.createBlog(uuid, title, image, body, author);

    res.json({
        message: 'success',
        blog,
    });
}

module.exports.getBlog = async (req, res, next) => {
    const { id } = req.params;

    const blog = await blogService.getBlog(id);

    res.json({
        message: 'success',
        blog,
    });
}

module.exports.listAllBlogs = async (req, res, next) => {
    const blogs = await blogService.listAllBlogs();

    res.json({
        message: 'success',
        blogs,
    });
}