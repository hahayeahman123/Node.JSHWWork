const express = require('express');
const workcontroller = require('../controllers/workController.js');

const router = express.Router();


router.param('id', workcontroller.checkID)

router // when we do something with all jobs, we use this router
    .route('/')
    .get(workcontroller.getAllJobs)
    .post(workcontroller.createJob)

router // when working with a specific id
    .route('/:id')
    .get(workcontroller.getJob)


router // when working with a workers name, the only use for it is to gt th salary of a specific worker
    .route('/suma/:darbuotojo_vardas')
    .get(workcontroller.getSalary)

    
module.exports = router;