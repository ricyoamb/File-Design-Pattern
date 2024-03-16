"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      genres: DataTypes.STRING,
      year: DataTypes.STRING,
      photo: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
      timestamps: false,
      underscored: false,
    }
  );
  return Movie;
};
