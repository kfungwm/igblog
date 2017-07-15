'use strict';
module.exports = function(sequelize, DataTypes) {
  var igApi = sequelize.define('igApi', {
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
  return igApi;
};