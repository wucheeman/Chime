
module.exports = function(sequelize, DataTypes) {
  var TextMsg = sequelize.define("TextMsg", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.ENUM('draft', 'final', 'sent'),
      allowNull: false
    },
    // // stretch goal
    // // category: {
    // //   type: DataTypes.STRING,   <-- maybe an enum?
    // //   defaultValue: "Announcement"
    // // }
    // // date_sent: {
    // //   type: DataTypes.DATE,
    // //   allowNull: true
    // }
  });
  TextMsg.associate = function(models) {
    TextMsg.belongsTo(models.Organization, {
      foreignKey: {
        allowNull: false
      }
    });
  };

    // TODO: add Organization as foreign key?

  return TextMsg;
};