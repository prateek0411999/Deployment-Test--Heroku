require('../server');
let mongoose = require('mongoose');
//testing our mongoose database connection

console.log(mongoose.connection.readyState);
// 
//0 = disconnected
//1 = connected
//2 = connecting
//3 = disconnecting

// beforeEach((done)=>{

//     mongoose.connection.collections.flow.drop(()=>{
//         done();
//     });

// });
