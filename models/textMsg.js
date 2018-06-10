module.exports = function(sequelize, DataTypes) {
  var Text = sequelize.define("Text", {
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
    date_sent: {
      type: DataTypes.DATE,
      allowNull: true
    }
    // TODO: add Organization as foreign key
    // TODO: add Author as foreign key
    // stretch goal
    // category: {
    //   type: DataTypes.STRING,
    //   defaultValue: "Personal"
    // }
  });
  return Text;
};