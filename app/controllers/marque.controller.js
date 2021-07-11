const db = require("../models");
const Marque = db.marque;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
      res.status(400).send({
        message: "Contenu vide"
      });
      return;
    }
  
    const marque = {
        nom: req.body.nom,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    Marque.create(marque)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la création d'une marque :/"
        });
      });
  };

  exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Marque.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de l'affichage des marques :/"
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
  
    Marque.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "La marque à été modifié !."
          });
        } else {
          res.send({
            message: `Impossible de modifier la marque`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "La marque n'a pas pu être modifiée, id : " + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Marque.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Marque supprimée !"
          });
        } else {
          res.send({
            message: `Impossible de supprimer la marque`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "La marque n'a pas pu être supprimée, id : " + id
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Marque.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "La marque n'a pas pu être trouvée, id : " + id
        });
      });
  };
