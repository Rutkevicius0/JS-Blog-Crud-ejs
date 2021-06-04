const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

// router.get('/', (req, res) => {
//   res.render('owners/index', {
//     title: 'Owners',
//     page: 'owners',
//     ownersArr,
//   });
// });

router.post('/new', (req, res) => {
  const newOwner = new Owner({
    name: req.body.name,
    email: req.body.email,
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
  res.render('owners/index', {
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
// router.get('/delete/:id', function (req, res) {
//   console.log(req.params.id);
//   return res.send(req.params.id);
// });

router.post('/delete/:id', function (req, res) {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect('/owners');
    })
    .catch((err) => console.error(err.message));
});

router.get('/edit/:id', function (req, res) {
  const ownerId = req.params.id;
  Owner.findById(ownerId)
    .then((result) => {
      res.render('owners/edit', {
        title: 'Single owners',
        page: 'owners',
        result,
      });
    })
    .catch((err) => console.error(err.message));
});

router.post('/edit/:id', (req, res) => {
  const { title, author, body } = req.body;
  Owner.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect('/owners');
    })
    .catch((err) => console.log(err));
});
module.exports = router;
