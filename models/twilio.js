const { getDB } = require('../database/mongoDB');

module.exports = class Twilio{
    constructor(sid){
        this.sid = sid;
    }

    save(){
        const db = getDB();
        return db.collection('twilio').insertOne(this);
    }

    static findSid(){
        const db = getDB();
        return db.collection('twilio').find().toArray();
    }
}