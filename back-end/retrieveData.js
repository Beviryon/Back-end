const Sage_autofacturation = require('./models/sage_autofacturation');

Sage_autofacturation.findAll()
  .then((sage_autofacturations) => {
    sage_autofacturations.forEach((sage_autofacturation) => {
      console.log(`code_cdg: ${sage_autofacturation.code_cdg}`);
      console.log(`compte_auxiliaire: ${sage_autofacturation.compte_auxiliaire}`);
      console.log(`Greff_tcc: ${sage_autofacturation.Greff_tcc}`);
      console.log(`code_journal: ${sage_autofacturation.code_journal}`);
      console.log(`compte_collectif: ${sage_autofacturation.compte_collectif}`);
      console.log(`taux_tva: ${sage_autofacturation.taux_tva}`);
      console.log(`profil_tva: ${sage_autofacturation.profil_tva}`);
      console.log(`mandat_facture: ${sage_autofacturation.mandat_facture}`);
      console.log(`taux_retrocession2: ${sage_autofacturation.taux_retrocession2}`);
      console.log(`compte_tva: ${sage_autofacturation.compte_tva}`);
      console.log(`compte_charges: ${sage_autofacturation.compte_charges}`);
      console.log(`montant_fixe: ${sage_autofacturation.montant_fixe}`);
      console.log('---------------------------');
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la récupération des données :', error);
  });
