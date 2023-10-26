const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const SageAutofacturation = sequelize.define('sage_autofacturation', {
  code_cdg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  compte_auxiliaire: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Greff_tcc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code_journal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  compte_collectif: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taux_tva: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profil_tva: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mandat_facture: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taux_retrocession2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  compte_tva: {
    type: DataTypes.STRING,
    allowNull: false
  },
  compte_charges: {
    type: DataTypes.STRING,
    allowNull: false
  },
  montant_fixe: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = SageAutofacturation;
