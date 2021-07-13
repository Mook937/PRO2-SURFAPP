const SurfSpot = require("../models/surfSpot"); // backtics or quotation??

module.exports = {
  new: newSurfSpot,
  create,
  index,
};

function index(req, res) {
  console.log('this index is working')
  SurfSpot.find({}, function (err, surfSpots) {
    res.render("surfSpots/index", {
      surfSpots,
    });
  });
}

// what does this do
function newSurfSpot(req, res) {
  res.render("surfSpots/new");
}

function create(req, res) {
  console.log(req.body, "this is req body");
  const surfSpot = new SurfSpot(req.body);
  surfSpot.save(function (err) {
  // a way to hadle errors
  if (err) return res.render("surfSpots/new");
  console.log(surfSpot, "this is surfSpot");
  // redirect back to surf spots once new surf spot is creaeted
  res.redirect("/surfSpots/");
  });
}
