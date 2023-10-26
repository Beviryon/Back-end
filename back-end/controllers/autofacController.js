const SageAutofacturation = require('../models/sage_autofacturation');

// Obtenez la liste de toutes les factures
exports.getAllSage_autofacturation = async (req, res) => {
  try {
    const factures = await SageAutofacturation.findAll();
    res.json({ factures });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créez une nouvelle facture
exports.createSage_autofacturation = async (req, res) => {
  const nouvelleFacture = req.body;
  try {
    const factureCreee = await SageAutofacturation.create(nouvelleFacture);
    res.status(201).json({ facture: factureCreee });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mettez à jour une facture par ID
exports.updateSage_autofacturation = async (req, res) => {
  const factureId = req.params.id;
  const donneesMisesAJour = req.body;
  try {
    const facture = await SageAutofacturation.findByPk(factureId);

    if (!facture) {
      res.status(404).json({ message: 'Facture non trouvée' });
      return;
    }

    await facture.update(donneesMisesAJour);
    res.json({ facture });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimez une facture par ID
exports.deleteSage_autofacturation = async (req, res) => {
  const factureId = req.params.id;
  try {
    const facture = await SageAutofacturation.findByPk(factureId);

    if (!facture) {
      res.status(404).json({ message: 'Facture non trouvée' });
      return;
    }

    await facture.destroy();
    res.json({ message: 'Facture supprimée avec succès' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
