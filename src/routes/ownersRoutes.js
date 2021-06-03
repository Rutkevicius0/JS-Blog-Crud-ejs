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
// router.get('/', (req, res) => {
//   res.render('owners/index', {
//     title: 'Owners',
//     page: 'owners',
//     ownersArr,
//   });
// });

router.post('/new', (req, res) => {
  const newOwner = new Owner({
    name: 'ovis',
    email: 'req.body.email',
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
router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

router.get('/', function (req, res) {
  Owner.find()
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        ownersArr: result,
      });
    })
    .catch((err) => console.error(err.message));
});
router.get('/single/:id', function (req, res) {
  const ownerId = req.params.id;
  Owner.findById(ownerId)
    .then((result) => {
      res.render('owners/singleOwner', {
        title: 'Single owners',
        page: 'owners',
        result,
      });
    })
    .catch((err) => console.error(err.message));
});
router.get('/single/:id/delete', function (req, res) {
  const ownerId = req.params.id;
  Owner.findByIdAndDelete(ownerId)
    .then((result) => {
      res.render('owners/delete', {
        title: 'Single owners',
        page: 'owners',
        result,
      });
    })
    .catch((err) => console.error(err.message));
});

module.exports = router;
