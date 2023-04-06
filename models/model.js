module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };
// module.exports = (sequelize, Sequelize) => {  
//   const Book = sequelize.define("book", {
//     title: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     authorId: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'authors',
//         key: 'id',
//       },
//       onDelete: 'CASCADE',
//     },
//     publisherId: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'publishers',
//         key: 'id',
//       },
//       onDelete: 'CASCADE',
//     },
//   });

//   // const Author = sequelize.define("author", {
//   //   name: {
//   //     type: Sequelize.STRING,
//   //     allowNull: false,
//   //   },
//   //   email: {
//   //     type: Sequelize.STRING,
//   //     allowNull: false,
//   //     unique: true,
//   //   },
//   // });

//   // const Publisher = sequelize.define("publisher", {
//   //   name: {
//   //     type: Sequelize.STRING,
//   //     allowNull: false,
//   //   },
//   //   email: {
//   //     type: Sequelize.STRING,
//   //     allowNull: false,
//   //     unique: true,
//   //   },
//   // });

//   // Define associations between models
//   // Author.hasMany(Book);
//   // Book.belongsTo(Author);

//   // Publisher.hasMany(Book);
//   // Book.belongsTo(Publisher);

//   return {
//     Book,
//     // Author,
//     // Publisher
//   };
// };



