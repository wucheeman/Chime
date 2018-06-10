module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Organization.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Organization.hasMany(models.TextMsg, {
      onDelete: "cascade"
    });
  };

  return Organization;
};