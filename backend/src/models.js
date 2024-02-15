const Sequelize = require('sequelize');
const POSTGRES_DATABASE_AVAILABLE = process.env.POSTGRES_DATABASE_AVAILABLE || false;
let sequelize;
if (POSTGRES_DATABASE_AVAILABLE) {
  const {
    POSTGRES_DATABASE_HOST: host,
    POSTGRES_DATABASE_USERNAME: username,
    POSTGRES_DATABASE_PASSWORD: password,
    POSTGRES_DATABASE_NAME: dbname,
  } = process.env
  // sequelize = new Sequelize(dbname, username, password, {
  //   host: host,
  //   dialect: 'postgres',
  //   ssl: { rejectUnauthorized: false }
  // });
  sequelize = new Sequelize('DATABASE_URI?ssl=true');
} else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.NODE_ENV === 'test' ? './database-test.sqlite3' : './database.sqlite3',
    logging: process.env.NODE_ENV === 'test' ? false : undefined,
  });
}

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
