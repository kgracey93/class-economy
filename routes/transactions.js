const express = require('express');
const router  = express.Router();
const Transaction = require('../models/Transaction');

// get all transactions
router.get('/', (req, res) => {
  Transaction.find()
    .then(transactions => {
      // console.log('CHALLENGES', challenges)
      res.status(200).json(transactions);
    })
    .catch(err => {
      res.json(err);
    })
});

router.post('/', (req, res) => {
  const { description, amount, category, operation} = req.body;
  const owner = req.user._id;
  Transaction.create({
    description,
    payor: owner,
    amount, 
    operation,
    category,
  })
    // // Get the data and return the project data as json
    // // best practice to send http code so that the client knows what's happening
  // .then(res.status(201));
  .then(transaction => {
    // console.log('sucessful add');
    res.status(201).json(transaction)
  })
  .catch(err => {
    res.json(err)
  })
});

module.exports = router;