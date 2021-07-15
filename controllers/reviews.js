const surfSpot = require('../models/surfSpot');

module.exports = {
  create
};

function create(req, res) {
  surfSpot.findById(req.params.id, function(err, surfSpot) {
    surfSpot.reviews.push(req.body);
    surfSpot.save(function(err) {
      res.redirect(`/surfSpots/${surfSpot._id}`);
    });
  });
}