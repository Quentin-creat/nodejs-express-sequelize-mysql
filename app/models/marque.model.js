module.exports = (sequelize, Sequelize) => {
    const Marque = sequelize.define("marque", {
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Marque;
};