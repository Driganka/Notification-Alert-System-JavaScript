const express = require('express') ;
const router = express.Router() ; 

const departmentController = require('../controllers/departmentcontroller') ;

// Get All department
router.get('/', departmentController.getDptList) ;

// Get department by ID
router.get('/:id', departmentController.getDptbyId ) ;

module.exports = router ;