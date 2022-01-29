exports.error = (req, res, next) => {
    let isLoggedIn = false;
    if(req.session)
        isLoggedIn = req.session.isLoggedIn;
    res.status(404).render('error', {
        pageTitle: 'Error Page',
        isLoggedIn: isLoggedIn
    });
};