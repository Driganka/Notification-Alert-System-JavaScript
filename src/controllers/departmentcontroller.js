const departmentmodel = require('../models/departmentmodel')

exports.getDptList = (req, res) => {
    console.log(`Here are all the department list`) ;
    departmentmodel.getAllDpt((err, department) => {
        console.log('We are here') ; 
        if(err)
            res.send(err);
        console.log('department', department) ;
        res.send(department) ;
    })
}

// Get Department by Department ID
exports.getDptbyId = (req, res) => {
    departmentmodel.getDptbyID(req.params.id, (err, dptmnt)=>{
        if(err) res.send(err) ;
        console.log('Single Department by ID', dptmnt) ;
        res.send(dptmnt) ;
    })
} ;

