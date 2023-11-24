'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Imagecatigory extends Model {
        static associate(models) {
            Imagecatigory.hasMany(models.Image);
        }
    }
    Imagecatigory.init(
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
            modelName: 'Imagecatigory'
        });
    return Imagecatigory;
};