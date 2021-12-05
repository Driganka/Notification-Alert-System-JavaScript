const express = require('express') ;
const router = express.Router() ; 

const developersController = require('../controllers/developerscontroller') ;

// Get All Developers
router.get('/', developersController.getDevList) ;

// Get Developers by ID
router.get('/:id', function(req,res){
    developersController.getDevbyId }) ;

//Create new developer
router.post('/', developersController.createNewDeveloper) ;

module.exports = router ;