'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            Image.belongsTo(models.Imagecatigory);
        }
    }
    Image.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            permission: {
                type: DataTypes.INTEGER
            },
            categoryId:{
                type: DataTypes.INTEGER
              }
            
        },
        {
            sequelize,
            createdAt: false,
            modelName: 'Image'
        });
    return Image;
};