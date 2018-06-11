module.exports = function(sequelize, DataTypes) {
  var Follower = sequelize.define("Follower", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [12]
      }
    },
    // TODO: fix when junction tables are better understood!
    followed_orgs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // TODO: is this ok as-is?
  // Follower.associate = function(models) {
  //   // Associating Followers with Organizations
    //   Follower.hasMany(models.Organization, {});
  // };

  return Follower;
};