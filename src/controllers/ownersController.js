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

const owners_single = (req, res) => {
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
};

const owners_postNew = (req, res) => {
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
};
const owners_new = (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
};
const owners_deletePost = (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect('/owners');
    })
    .catch((err) => console.error(err.message));
};

const owners_edit = (req, res) => {
  const ownerId = req.params.id;
  Owner.findById(ownerId)
    .then((result) => {
      res.render('owners/edit', {
        title: 'Edit owner',
        page: 'owners',
        result,
      });
    })
    .catch((err) => console.error(err.message));
};

const owners_editPost = (req, res) => {
  const { title, author, body } = req.body;
  Owner.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect('/owners');
    })
    .catch((err) => console.log(err));
};

const owners_search = (req, res) => {
  const searchRegex = new RegExp(req.query.search, 'i');
  Owner.find({ name: searchRegex })
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        ownersArr: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  owners_index,
  owners_single,
  owners_postNew,
  owners_new,
  owners_deletePost,
  owners_edit,
  owners_editPost,
  owners_search,
};
