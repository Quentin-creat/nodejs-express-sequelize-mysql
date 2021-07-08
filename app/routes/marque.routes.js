module.exports = app => {
    const marques = require("../controllers/marque.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", marques.create);
  
    router.get("/", marques.findAll);
  
    router.put("/:id", marques.update);
  
    router.delete("/:id", marques.delete);
  
    app.use('/api/marques', router);
};