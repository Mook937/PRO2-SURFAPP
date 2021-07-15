const express = require("express");
const router = express.Router();
const surfSpotsCtrl = require("../controllers/surfSpots");

router.get("/new", surfSpotsCtrl.new);
router.post("/", surfSpotsCtrl.create);
router.get("/", surfSpotsCtrl.index);
router.delete("/:id", surfSpotsCtrl.delete);
router.get("/:id", surfSpotsCtrl.show);

module.exports = router;
