// const express = require('express');
// const router  = express.Router();
// const Transaction = require('../models/Transaction');

// router.post('/', (req, res) => {
//   console.log('test');
//   console.log('req user:', req.user._id);
//   const { description, amount, category, operation} = req.body;
//   const owner = req.user._id;
//   console.log('title', title);
//   // console.log('owner', owner);
//   Transaction.create({
//     payor: owner,
//     amount, 
//     operation,
//     category,
//   })
//     // // Get the data and return the project data as json
//     // // best practice to send http code so that the client knows what's happening
//   // .then(res.status(201));
//   .then(transaction => {
//     // console.log('sucessful add');
//     res.status(201).json(transaction)
//   })
//   .catch(err => {
//     res.json(err)
//   })
// });