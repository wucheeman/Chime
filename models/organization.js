module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // TODO: fix when junction tables are better understood!
    followers: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Organization.associate = function(models) {
    // Associating organization with text msgs
    // When an organization is deleted, also delete any associated texts
    Organization.hasMany(models.TextMsg, {
      onDelete: "cascade"
    });
  };

  return Organization;
};