const { getDB } = require('../database/mongoDB');
const { ObjectID, ObjectId } = require('mongodb');

module.exports = class User{
    constructor(name, email, mobileNo, cart){
        this.name = name;
        this.email = email;
        this.mobileNo = mobileNo;
        this.cart = cart?cart: {items :[], price: 0};
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

    static updateCart(product, userId){
        const db = getDB();
        return db.collection('users').findOne({_id: new ObjectId(userId)})
        .then(user => {
            if(!user){
                const err = new Error('User not found!!');
                throw err;
            }
            else{
                const cart = {...user.cart};
                const productIndex = cart.items.findIndex(item => item.prodId === product.prodId);
                let qty = 1;
                const updatedCart = {...cart};
                let item;
                const updatedItems = [...cart.items];
                // console.log(productIndex);
                if(productIndex !== -1){
                    qty += cart.items[productIndex].qty;
                    item = {...cart.items[productIndex]}
                    item.qty = qty;
                    updatedItems[productIndex] = item;
                }
                else{
                    item = {
                        prodId: product.prodId,
                        title: product.title,
                        price: product.price,
                        imageUrl: product.imageUrl,
                        qty: qty
                    }
                    updatedItems.push(item);
                }
                updatedCart.items = updatedItems;
                // console.log(updatedCart);
                let price = 0;
                updatedCart.items.map(item => {
                    price += Number(item.price) * Number(item.qty);
                });
                updatedCart.price = price;
                return db.collection('users').updateOne({_id: new ObjectId(userId)}, {$set :{cart: updatedCart}});
            }
        })
        .catch(err => console.log(err));
    }

    static findCart(userId){
        const db = getDB();
        return db.collection('users').findOne({_id: new ObjectId(userId)});
    }

    static deleteItemFromCart(userId, prodId){
        const db = getDB();
        return db.collection('users').findOne({_id: new ObjectId(userId)})
        .then(user => {
            const prodIndex = user.cart.items.findIndex(item => item.prodId === prodId);
            const updatedItems = [...user.cart.items];
            updatedItems.splice(prodIndex, 1);
            return db.collection('users').updateOne({_id: new ObjectId(userId)} ,{$set: {cart: {items: updatedItems}}});
        })
        .catch(err => console.log(err));
    }
}