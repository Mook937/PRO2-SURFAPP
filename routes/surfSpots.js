const express = require("express");
const router = express.Router();
const surfSpotsCtrl = require("../controllers/surfSpots");

/* GET users listing. */
router.get("/new", surfSpotsCtrl.new);
// router.get("/new", () => console.log("new route"));
router.post("/", surfSpotsCtrl.create);
// router made with Jason
//router.get / surfSpotsCtrl.index;
// router made on my own
router.get("/", surfSpotsCtrl.index);
//router.get("/", () => console.log("index route"));

module.exports = router;
