'use strict';
const {
  Model
} = require('sequelize');
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
  Movie.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'Movie',
  });
  return Movie;
};