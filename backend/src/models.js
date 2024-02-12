const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' ? './database-test.sqlite3' : './database.sqlite3',
  logging: process.env.NODE_ENV === 'test' ? false : undefined,
});

class Blog extends Sequelize.Model { }
Blog.init(
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    author: {
      type: Sequelize.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Blog',
    tableName: 'blogs'
  }
);

module.exports = {
  sequelize,
  Blog
};
