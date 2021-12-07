const dbConn = require('../../config/dbconfig') ;

const department = (dpt) => {
    this.id = dpt.id ; 
    this.dptname = dpt.dptname ;
}

department.getAllDpt = (result) => {
    dbConn.query('SELECT * FROM TEAM', (err, res) => {
        if(err){
            console.log('Error while fetching departments..', err) ;
            result(null, err) ;
        }else{
            console.log('Departments fetched successfully') ;
            result(null, res);
        }
    }) 
}

// Get Department ID from database
department.getDptbyID = (id, result) => {
    dbConn.query('SELECT * FROM TEAM WHERE id=?', id, (err, res) => {
        if(err){
            console.log('Error while fetching Department by ID', err) ;
            result(null, err) ;
        }else{
            result(null, res) ;
        }
    })
}


module.exports = department ;