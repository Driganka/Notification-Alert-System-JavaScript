const express = require('express') ;
const router = express.Router() ; 

const messageController = require('../controllers/messageController') ;

// Get All messages
router.get('/', messageController.getMsgList) ;

// Get messages by ID
router.get('/:id', messageController.getMsgbyId ) ;

module.exports = router ;