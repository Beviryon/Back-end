const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eurexo_configdatabase', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// la connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connecté à la base de données MySQL');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
}

testConnection();

module.exports = sequelize;
