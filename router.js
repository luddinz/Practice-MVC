const express = require("express");
const router = express.Router();
const catalog = require("./controllers/catalogController");

router.get("/catalogs", catalog.index);
router.get("/catalogs/create", catalog.create);
router.post("/catalogs", catalog.store);
router.get("/catalogs/:id", catalog.show);

module.exports = router;
