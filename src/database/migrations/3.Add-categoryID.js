"use strict";



module.exports = {
    up: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("image","categoryId" ,
        {

            type: sequelize.INTEGER,
            allowNUll: true,
            references:{
                model:"imagecatigories",
                key: "id"

            },
            onUpdate:"CASCADE",
            onDelete: "SET NULL",


        });
    
        
    },
    down: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("image","categoryId");
    },

};