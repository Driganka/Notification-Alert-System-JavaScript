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
developer.getDevbyID = (did, result) => {
    dbConn.query('SELECT * FROM DEVELOPERS WHERE did=?', did, (err, res) => {
        if(err){
            console.log('Error while fetching developer by id', err) ;
            result(null, err) ;
        }else{
            result(null, res) ;
        }
    })
}


// Get Developer department from database
developer.getDevbyDpt = (dptname, result) => {
    dbConn.query('SELECT * FROM DEVELOPERS WHERE dptname=?', dptname, (err, res) => {
        if(err){
            console.log('Error while fetching developer by department', err) ;
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
            //console.log('Error while inserting data') ; 
            result(null, err) ;  
        }else{
            // result(res)
            // console.log('Developer Added Successfully') ;
            console.log(res) ;
        }
    })
}

module.exports = developer ;