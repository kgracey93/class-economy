const express = require('express');
const router  = express.Router();
const Job = require('../models/Job');

// get all transactions
router.get('/', (req, res) => {
  Job.find()
    .then(jobs => {
      // console.log('CHALLENGES', challenges)
      res.status(200).json(jobs);
    })
    .catch(err => {
      res.json(err);
    })
});

// get a specfic job
router.get('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => {
      if (!job) {
        res.status(404).json(job);
      } else {
        res.status(200).json(job);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

router.post('/', (req, res) => {
  const { title, salary, description, qualifications} = req.body;
  const user = req.user._id;
  console.log(title);
  Job.create({
    title,
    salary,
    description, 
    qualifications,
    creator: user
  })
    // // Get the data and return the project data as json
    // // best practice to send http code so that the client knows what's happening
  // .then(res.status(201));
  .then(job => {
    // console.log('sucessful add');
    res.status(201).json(job)
  })
  .catch(err => {
    res.json(err)
  })
});

module.exports = router;