'use strict';
module.exports = function(sequelize, DataTypes) {
  var InstagramPic = sequelize.define('InstagramPic', {
    ig_id: DataTypes.STRING,
    created_time: DataTypes.INTEGER,
    img: DataTypes.STRING,
    url: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return InstagramPic;
};