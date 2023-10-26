const express = require('express');
const { Sequelize } = require("sequelize");
const app = express();
const cors = require('cors');
const port = 3001;
app.use(cors());


const autofacRoute = require('./routes/autofacRoute');
app.use('/', autofacRoute);

const sequelize = new Sequelize('eurexo_configdatabase', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

 sequelize.sync()
   .then(() => {
     console.log("Modèles synchronisés avec la base de données");
     app.listen(port, () => {
       console.log(`Serveur en cours d'exécution sur le port ${port}`);
     });
   })
   .catch((error) => {
     console.error("Erreur de la synchronisation:", error);
   });

module.exports = app; 