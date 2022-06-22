var mongoose = require('mongoose');
var connect = function() {
    return new Promise((connect,error)=>{
        var DBURL = 'mongodb+srv://root:root@cluster0.dccx1pn.mongodb.net/exam-portal?retryWrites=true&w=majority';
        mongoose.connect(DBURL,(err,connected)=>{
            if(err) return error(err);
            else if(connected) return connect("Database Connected SuccessFully!");
        })
    })
}
module.exports = {connect};