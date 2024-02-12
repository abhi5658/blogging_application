const uuidV4 = require('uuid').v4;
const { Blog, sequelize } = require('../models');

module.exports.createBlog = async (uuid, title, image, body, author) => {
    const blog = await Blog.create({
        uuid: uuid || uuidV4(),
        title,
        image,
        body,
        author
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
