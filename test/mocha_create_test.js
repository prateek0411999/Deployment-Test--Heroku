const login=require('../models/login');
const assert=require('assert');

describe('Signing up',()=>{
    it('Creating a user in Database', ()=>{
        //assert(true);
        const prateek = new login({fullname: "Prateek Sharma",email: "prateekshrmprateek@gmail.com",password: "prateek1"})
        prateek.save()
            .then(()=>{
                assert(!prateek.isNew)
            })
            .catch((err)=>{
                console.log(err);
            })
    })
});


