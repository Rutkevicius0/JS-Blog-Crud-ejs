const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

const ownersArr = [
  {
    name: 'Obi',
    email: ' obi.vankenobi@gmail.com',
  },
  {
    name: 'matchu',
    email: 'matchu.pikchu@yahoo.com',
  },
  { name: 'Rutkevicius', email: 'ovis@gmail.com' },
];
router.get('/', (req, res) => {
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
    ownersArr,
  });
});

router.get('/new', (req, res) => {
  const newOwner = new Owner({
    name: ownersArr[0].name,
    email: ownersArr[0].email,
  });
  newOwner
    .save()
    .then((result) => {
      res.render('owners/new', {
        title: 'Add owner',
        page: 'owners_new',
        result,
      });
    })
    .catch((err) => console.log(err));
});
module.exports = router;
