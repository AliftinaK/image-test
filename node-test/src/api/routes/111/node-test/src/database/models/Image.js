'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {}
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
            
        },
        {
            sequelize,
            createdAt: false,
            modelName: 'Image'
        });
    return Image;
};