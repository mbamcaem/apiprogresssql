module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    ISBN: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    publisherId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "publishers",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  });
  

  const Author = sequelize.define("author", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  const Publisher = sequelize.define("publisher", {   
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  // Define associations between models

  Author.hasMany(Book);
  Book.belongsTo(Author);

  Book.hasOne(Publisher, { foreignKey: "publisherId" });
  Publisher.belongsTo(Book, { foreignKey: "publisherId", onDelete: "CASCADE" });

  return {
    Book,
    Author,
    Publisher,
  };
};
