module.exports = {
    HOST: process.env.NEXT_PUBLIC_HOST,
    USER: process.env.NEXT_PUBLIC_USER,
    PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
    DB: process.env.NEXT_PUBLIC_DB,
    dialect: process.env.NEXT_PUBLIC_dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

//   Sequelize connection pool configuration:
// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error