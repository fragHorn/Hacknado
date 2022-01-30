const User = require('../models/user');

exports.getProducts = (req, res, next) => {
    let isLoggedIn = false;
    if(req.session)
        isLoggedIn = req.session.isLoggedIn;
    res.render('shop/product-list', {
        pageTitle: 'Products',
        isLoggedIn: isLoggedIn
    });
};

exports.postDetails = (req, res, next) => {
    const image = req.body.image;
    const title = req.body.title;
    const price = req.body.price;
    const id = req.body.id;
    let isLoggedIn = false;
    if(req.session)
        isLoggedIn = req.session.isLoggedIn;
    // console.log(typeof(image)); 
    res.render('shop/product-details', {
        pageTitle: 'Product Details',
        title: title,
        price: price,
        image: image,
        id: id,
        isLoggedIn: isLoggedIn
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.id;
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.image;
    const item = {
        prodId: prodId,
        title: title,
        price: price,
        imageUrl: imageUrl
    };
    User.updateCart(item, req.session.user._id)
    .then(result => {
        console.log('Cart Updated!!');
        res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    let isLoggedIn = false;
    if(req.session)
        isLoggedIn = req.session.isLoggedIn;
    if(!isLoggedIn)
        res.redirect('/auth/login');
    User.findCart(req.session.user._id)
    .then(({ cart }) => {
        res.render('shop/cart', {
            pageTitle: 'Cart',
            items: cart.items,
            isLoggedIn: isLoggedIn
        })
    })
    .catch(err => console.log(err));
};


exports.getDeleteItem = (req, res, next) => {
    const prodId = req.params.prodId;
    User.deleteItemFromCart(req.session.user._id, prodId)
    .then(result => {
        console.log('Item deleted from cart!!!');
        res.redirect('/cart');
    })
    .catch(err => console.log(err));
};