const dbConn = require('../../config/dbconfig') ;

const messages = (msg) => {
    this.id = msg.id ; 
    this.msgname = msg.msgname ;
}

messages.getAllMsg = (result) => {
    dbConn.query('SELECT * FROM MESSAGES', (err, res) => {
        if(err){
            console.log('Error while fetching messages..', err) ;
            result(null, err) ;
        }else{
            console.log('Messages fetched successfully') ;
            result(null, res);
        }
    }) 
}

// Get messages ID from database
messages.getMsgbyID = (id, result) => {
    dbConn.query('SELECT * FROM MESSAGES WHERE mid=?', id, (err, res) => {
        if(err){
            console.log('Error while fetching messages by ID', err) ;
            result(null, err) ;
        }else{
            result(null, res) ;
        }
    })
}


module.exports = messages ;