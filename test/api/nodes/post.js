const expect =require('chai').expect;
const request= require('supertest');
const server = require('../../../server');
let mongoose = require('mongoose');

describe('Post /signup',()=>{
    // before(()=>{
    //     console.log(mongoose.connection.readyState)
    //         .then(()=> done())
    //         .catch((err)=> done(err))
    // })


    it('OK, creating a new user',(done)=>{
        request(server).post('/signup')
        .send({fullname: "Manik Dahuja",email: "manikdahuja@gmail.com",password: "manik1"})
        .then((res)=>{
            const body=res.body;
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('fullname');
            expect(body).to.contain.property('email');
            expect(body).to.contain.property('password');
            done();
        })
        .catch((err)=> done(err))
    })
});