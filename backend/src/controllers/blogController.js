const blogService = require('../services/blogService')

module.exports.createBlog = async (req, res, next) => {
    const { uuid, title, content } = req.body;

    const blog = await blogService.createBlog(uuid, title, content);

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