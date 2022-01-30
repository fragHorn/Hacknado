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
    let isLoggedIn = false;
    if(req.session)
        isLoggedIn = req.session.isLoggedIn;
    // console.log(typeof(image)); 
    res.render('shop/product-details', {
        pageTitle: 'Product Details',
        title: title,
        price: price,
        image: image,
        isLoggedIn: isLoggedIn
    });
};