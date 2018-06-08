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
    }
  });
// TODO: add organizations followed
// TODO: add password (stretch)
  return Follower;
};
