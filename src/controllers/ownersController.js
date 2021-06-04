//owners_index owners_single ...
const Owner = require('../models/owner');
const owners_index = (req, res) => {
  Owner.find()
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        ownersArr: result,
      });
    })
    .catch((err) => console.error(err.message));
};

module.exports = { owners_index };
