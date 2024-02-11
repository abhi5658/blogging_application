const { Blog, sequelize } = require('../models');

module.exports.createBlog = async (uuid, title, content) => {
    const blog = await Blog.create({
        uuid,
        title,
        content
    });
    return blog;
}
module.exports.getBlog = async (id) => {

    const blog = await Blog.findOne({
        where: {
            id
        }
    });
    return blog;
}

module.exports.listAllBlogs = async () => {
    const blogs = await Blog.findAll({
        order: [
            ['createdAt', 'DESC'],
            ['id', 'DESC']
        ]
    });
    return blogs;
}
