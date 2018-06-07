module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
// TODO: add organization
// TODO: add texts
// TODO: add password (stretch)
  return Author;
};
