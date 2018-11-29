'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        // Creamos los registros
        return queryInterface.bulkInsert('bill',
            [
                {
                    bill_id: 1,
                    bill_denomination: 100000,
                    bill_amount: 0,
                    bill_total: 0
                },
                {
                    bill_id: 2,
                    bill_denomination: 50000,
                    bill_amount: 0,
                    bill_total: 0
                },
                {
                    bill_id: 3,
                    bill_denomination : 20000,
                    bill_amount : 0,
                    bill_total : 0
                },
                {
                    bill_id: 4,
                    bill_denomination : 10000,
                    bill_amount : 0,
                    bill_total : 0
                },
                {
                    bill_id: 5,
                    bill_denomination : 5000,
                    bill_amount : 0,
                    bill_total : 0
                },
                {
                    bill_id: 6,
                    bill_denomination : 2000,
                    bill_amount : 0,
                    bill_total : 0
                },
                {
                    bill_id: 7,
                    bill_denomination : 1000,
                    bill_amount : 0,
                    bill_total : 0
                },
            ], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
       return queryInterface.bulkDelete('bill', null, {});
    }
};
