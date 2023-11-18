"use strict";



module.exports = {
    up: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("imagecatigories","categoryId" ,
        {

            type: sequelize.INTEGER,
            allowNUll: true,
            references:{
                model:"image",
                key: "id"

            },
            onUpdate:"CASCADE",
            onDelete: "SET NULL",


        });
    
        
    },
    down: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("imagecatigories","categoryId");
    },

};