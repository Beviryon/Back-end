'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sage_autofacturations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code_cdg: {
        type: Sequelize.STRING,
        allowNull: true
      },
      compte_auxiliaire: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Greff_tcc: {
        type: Sequelize.STRING,
        allowNull: true
      },
      code_journal: {
        type: Sequelize.STRING,
        allowNull: true
      },
      compte_collectif: {
        type: Sequelize.STRING,
        allowNull: true
      },
      taux_tva: {
        type: Sequelize.STRING,
        allowNull: true
      },
      profil_tva: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mandat_facture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      taux_retrocession2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      compte_tva: {
        type: Sequelize.STRING,
        allowNull: true
      },
      compte_charges: {
        type: Sequelize.STRING,
        allowNull: true
      },
      montant_fixe: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sage_autofacturations');
  }
};
