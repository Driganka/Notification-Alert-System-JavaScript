const messagemodel = require('../models/messagemodel')

exports.getMsgList = (req, res) => {
    console.log(`Here are all the department list`) ;
    messagemodel.getAllMsg((err, department) => {
        console.log('We are here') ; 
        if(err)
            res.send(err);
        console.log('department', department) ;
        res.send(department) ;
    })
}

// Get Department by Department ID
exports.getMsgbyId = (req, res) => {
    messagemodel.getMsgbyID(req.params.id, (err, dptmnt)=>{
        if(err) res.send(err) ;
        console.log('Single Department by ID', dptmnt) ;
        res.send(dptmnt) ;
    })
} ;

