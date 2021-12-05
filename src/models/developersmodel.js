const dbConn = require('../../config/dbconfig') ;

const developer = (dev) => {
    this.did = dev.did ; 
    this.fname = dev.fname ;
    this.email = dev.email ;
    this.mobile = dev.mobile ;
    this.dptname = dev.dptname ;
}

developer.getAllDevs = (result) => {
    dbConn.query('SELECT * FROM DEVELOPERS', (err, res) => {
        if(err){
            console.log('Error while fetching developers..', err) ;
            result(null, err) ;
        }else{
            console.log('Employees fetched successfully') ;
            result(null, res);
        }
    }) 
}

// Get Developer ID from database
developer.getDevbyID = (id, result) => {
    dbConn.query('SELECT * FROM DEVELOPERS WHERE did=?', id, (err, res) => {
        if(err){
            console.log('Error while fetching employee by id', err) ;
            result(null, err) ;
        }else{
            result(null, res) ;
        }
    })
}


// Create new developer
developer.createDeveloper = (developerReqData, result) => {
    dbConn.query('INSERT INTO DEVELOPERS SET ? ', developerReqData, (err, res) => {
        if(err){
            console.log('Error while inserting data') ; 
            result(null, err) ;  
        }else{
            console.log('Developer Added Successfully') ;
            result(null, res)
        }
    })
}

module.exports = developer ;