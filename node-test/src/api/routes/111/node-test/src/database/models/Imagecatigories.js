'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Imagecatigories extends Model {}
    Imagecatigories.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            
        },
        {
            sequelize,
            createdAt: false,
            modelName: 'Imagecatigories'
        });
    return Imagecatigories;
};