const express = require('express');
const router  = express.Router();
const User = require('../models/User');

// get a specific user
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then(() => {
    res.json(req.user);
  });
});

router.put('/:id', (req, res, next) => {
  const { transactions } = req.body;

  User.findByIdAndUpdate(
    req.params.id,
    { transactions },
    { new: true }
  // ).populate('challenges.id').populate('rewards')
  )
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // console.log(err) 
    })
});

module.exports = router;