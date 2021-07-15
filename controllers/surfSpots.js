const SurfSpot = require("../models/surfSpot");

module.exports = {
  new: newSurfSpot,
  create,
  index,
  show,
  delete: deleteSurfSpot,
};

function deleteSurfSpot(req, res) {
  SurfSpot.findByIdAndDelete(req.params.id, function (err, surfSpot) {
    if (err) {
      console.log(err);
    }
    res.redirect("/surfSpots/");
  });
}

function index(req, res) {
  SurfSpot.find({}, function (err, surfSpots) {
    res.render("surfSpots/index", {
      surfSpots,
      title: "Surf Spots",
    });
  });
}
function newSurfSpot(req, res) {
  res.render("surfSpots/new", {
    title: "New Surf Spot",
  });
}

function create(req, res) {
  const surfSpot = new SurfSpot(req.body);
  surfSpot.save(function (err) {
    if (err) return res.render("surfSpots/new");
    console.log(surfSpot, "this is surfSpot");

    res.redirect("/surfSpots/");
  });
}

function show(req, res) {
  SurfSpot.findById(req.params.id, function (err, surfSpot) {
    res.render("surfSpots/show", { title: "Surf Spot Detail", surfSpot });
  });
}
