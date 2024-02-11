const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' ? './backend/database-test.sqlite3' : './backend/database.sqlite3',
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
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
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
