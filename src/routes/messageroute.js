const express = require('express') ;
const router = express.Router() ; 

const messageController = require('../controllers/messageController') ;

// Get All department
router.get('/', messageController.getMsgList) ;

// Get department by ID
router.get('/:id', messageController.getMsgbyId ) ;

module.exports = router ;