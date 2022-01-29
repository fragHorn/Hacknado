const { getDB } = require('../database/mongoDB');
const { ObjectID } = require('mongodb');

module.exports = class User{
    constructor(name, email, mobileNo){
        this.name = name;
        this.email = email;
        this.mobileNo = mobileNo;
    };

    save(){
        const db = getDB();
        return db.collection('users').insertOne(this);
    }
    
    static findUser(mobileNo){
        const db = getDB();
        return db.collection('users').findOne({
                mobileNo: mobileNo
        });
    }

}