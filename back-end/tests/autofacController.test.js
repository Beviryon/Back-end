const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Sage Autofacturation API', () => {
  // Toutes les données Sage Autofacturation
  it('Toutes les données Sage Autofacturation', (done) => {
    chai
      .request(app)
      .get('/') // Route réelle de récupération des données
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.factures).to.be.an('array'); // La réponse est un tableau de factures
        done();
      });
  });

  // Créer une nouvelle donnée Sage Autofacturation
  it('Devrait créer une nouvelle donnée Sage Autofacturation', (done) => {
    chai
      .request(app)
      .post('/') // Route pour créer une nouvelle donnée
      .send({
        code_cdg: '',
        compte_auxiliaire: ' ',
        Greff_tcc: ' ',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        // Si la réponse contient les données créées
        expect(res.body.facture).to.have.property('code_cdg', '');
        expect(res.body.facture).to.have.property('compte_auxiliaire', '');
        expect(res.body.facture).to.have.property('Greff_tcc', '');
        done();
      });
  });

  // Mise à jour d'une donnée Sage Autofacturation par ID
  it('Devrait mettre à jour une donnée Sage Autofacturation par ID', (done) => {
    chai
      .request(app)
      .put('/1') // Remplacez "1" par l'ID de la donnée que vous souhaitez mettre à jour
      .send({
        taux_tva: 20.0, // Mise à jour du champ "taux_tva"
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Si la réponse contient les données mises à jour
        expect(res.body.facture).to.have.property('taux_tva', 20.0);
        done();
      });
  });

  // Supprimer une donnée Sage Autofacturation par ID
  it('Supprimer une donnée Sage Autofacturation par ID', (done) => {
    chai
      .request(app)
      .delete('/1') // Remplacez "1" par l'ID de la donnée que vous souhaitez supprimer
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Facture supprimée avec succès');
        done();
      });
  });
});
