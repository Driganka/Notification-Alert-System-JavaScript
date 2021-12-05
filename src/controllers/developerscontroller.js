const developermodel = require('../models/developersmodel')

exports.getDevList = (req, res) => {
    console.log(`Here are all the developers list`) ;
    developermodel.getAllDevs((err, developers) => {
        console.log('We are here') ; 
        if(err)
            res.send(err);
        console.log('Developers', developers) ;
        res.send(developers) ;
    })
}

// Get Developer by Developer-ID
exports.getDevbyId = (req, res) => {
    //console.log('Get dev by id') ;
    developermodel.getDevbyID(req.params.id, (err, developer)=>{
        if(err) res.send(err) ;
        console.log('Single Developer by ID', developer) ;
        res.send(developer) ;
    })
} ;

//Create New Developer
exports.createNewDeveloper = (req, res) => {
    console.log('req data', req.body) ;
    const devReqData = developermodel(req.body) ;
    console.log('developerReqData', devReqData) ;
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success : false, message : 'Please fill all fields'})
    }else{
        console.log('Valid data') ; 
        return ;
        developermodel.createDeveloper(devReqData, (err, employee)=>{
            if(err)
            res.send(err) ;
            res.json({status: false, messages: 'Something went wrong', data: developer})
        })
    }
}