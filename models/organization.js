module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
// TODO: add authors
// TODO: add distribution list
  return Organization;
};