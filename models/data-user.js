const { getDB } = require('../database/mongoDB');
const { ObjectId } = require('mongodb');

module.exports = class DataUser{
    // constructor(userId, materialData){
    //     this.userId = new ObjectId(userId);
    //     this.materialData = materialData;
    // };

    static updateData(userId, data){
        // console.log(userId, data);
        const db = getDB();
        return db.collection('datauser').findOne({userId: new ObjectId(userId)})
        .then(userData => {
            console.log(userData);
            let materials = {};
            if(!userData){
                data.map(d => {
                    materials[d.material] = d.qty;
                });
                // console.log(materials);
                const document = {
                    userId: new ObjectId(userId),
                    materials: materials
                };
                return db.collection('datauser').insertOne(document);
            }
            else{
                materials = {...userData.materials};
                data.map(d => {
                    if(!materials[d.material])
                        materials[d.material] = d.qty;
                    else
                        materials[d.material] = String(Number(materials[d.material]) + Number(d.qty));
                })
                // console.log(materials);
                return db.collection('datauser').updateOne({_id: new ObjectId(userData._id)}, {$set: {materials: materials}});
            }
        })
        .catch(err => console.log(err));
    }

    static findData(userId){
        const db = getDB();
        return db.collection('datauser').findOne({userId: new ObjectId(userId)});
    };
};