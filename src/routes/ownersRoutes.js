const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');
//load controllers
const ownersControllers = require('../controllers/ownersController');

// router.get('/', (req, res) => {
//   res.render('owners/index', {
//     title: 'Owners',
//     page: 'owners',
//     ownersArr,
//   });
// });

//creating nwe owner
router.post('/new', ownersControllers.owners_postNew);
//renddering new owner form page
router.get('/new', ownersControllers.owners_new);

router.get('/', ownersControllers.owners_index);

router.get('/single/:id', ownersControllers.owners_single);
// router.get('/delete/:id', function (req, res) {
//   console.log(req.params.id);
//   return res.send(req.params.id);
// });

router.post('/delete/:id', ownersControllers.owners_deletePost);

router.get('/edit/:id', ownersControllers.owners_edit);

router.post('/edit/:id', ownersControllers.owners_editPost);
module.exports = router;
