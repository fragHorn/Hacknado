const { getDB } = require('../database/mongoDB');
const { ObjectId } = require('mongodb');


module.exports = class PickupUser{
    constructor(userId, materials, weight, address){
        this.userId = new ObjectId(userId);
        this.materials = [...materials];
        this.weight = weight;
        this.address = address;
    }

    save(){
        const db = getDB();
        return db.collection('pickup-user').insertOne(this);
    }
}