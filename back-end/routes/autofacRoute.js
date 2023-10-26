const express = require('express');
const router = express.Router();
const SageAutofacturation = require('../models/sage_autofacturation');

const factureRouter =  express.Router();

// Route pour obtenir toutes les données (toutes les factures)
factureRouter.get('/', async (req, res) => {
  try {
    const factures = await SageAutofacturation.findAll();
    res.json({ factures });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des factures' });
  }
});

// Route pour obtenir une facture par ID
factureRouter.get('/:id', async (req, res) => {
  const factureId = req.params.id;

  try {
    const facture = await SageAutofacturation.findByPk(factureId);

    if (!facture) {
      res.status(404).json({ message: 'Facture non trouvée' });
      return;
    }

    res.json({ facture });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la facture' });
  }
});

// Route pour créer une nouvelle facture
factureRouter.post('/', async (req, res) => {
  const nouvelleFacture = req.body; 

  try {
    const factureCreee = await SageAutofacturation.create(nouvelleFacture);
    res.status(201).json({ facture: factureCreee });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la facture' });
  }
});

// Route pour mettre à jour une facture par ID
factureRouter.put('/:id', async (req, res) => {
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
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la facture' });
  }
});


// Route pour supprimer une facture par ID
factureRouter.delete('/:id', async (req, res) => {
  const factureId = req.params.id;

  try {
    const facture = await SageAutofacturation.findByPk(factureId);

    if (!facture) {
      res.status(404).json({ message: 'Facture non trouvée' });
      return;
    }

    await facture.destroy();
    res.json({ message: 'Facture supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la facture' });
  }
});

router.use("/", factureRouter);

module.exports = router;


