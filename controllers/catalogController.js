const { Catalog } = require("./models");

module.exports = {
  index: (req, res) => {
    Catalog.findAll().then((catalogs) => {
      res.render("catalogs/index", {
        catalogs,
      });
    });
  },

  create: (req, res) => {
    res.render("catalogs/create");
  },

  store: (req, res) => {
    Catalog.create({
      product_name: req.body.product_name,
      product_color: req.body.product_color,
      product_price: req.body.product_price,
      product_description: req.product_description,
    }).then((catalog) => {
      res.send("Catalog has success create");
    });
  },

  show: (req, res) => {
    Catalog.findOne({
      where: { id: req.params.id },
    }).then((catalog) => {
      // Karena hasil dari promise findOne adalah object,
      // Maka bisa kita lempar langsung ke method render
      res.render("catalogs/show", { data: catalog.dataValues });
    });
  },
};
