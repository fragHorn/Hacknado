const { Twilio } = require('twilio');
const User = require('../models/user');
const twilio = require('../util/twilio');

let mobileNo = null;

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        otp: false,
        isLoggedIn: false
    });
};

exports.postLogin = (req, res, next) => {
    const otp = req.query.otp;
    if(otp){
        mobileNo = req.body.mobileNo;
        User.findUser(mobileNo)
        .then(user => {
            if(user){
                // console.log(user);
                twilio.sendToken(mobileNo)
                .then(verification => {
                    // console.log(verification);
                    res.render('auth/login', {
                        pageTitle: 'Login',
                        otp: otp,
                        isLoggedIn: false
                    });
                })
                .catch(err => console.log(err));
            }
            else{
                const error = new Error('Mobile Number not found!!!');
                throw error;
            }
        })
        .catch(err => console.log(err));
    }
    else{
        const otpNo = req.body.otp;
        twilio.verifyToken(mobileNo, otpNo)
        .then(verification => {
            // console.log(verification);
            if(verification.status){
                User.findUser(mobileNo)
                .then(user => {
                    mobileNo = null;
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    return req.session.save(err => {
                        console.log(err);
                        res.redirect('/');
                    })
                })
                .catch(err => console.log(err));
                // res.render('auth/login', {
                //     pageTitle: 'Login',
                //     otp: false
                // });
            }
        })
        .catch(err => console.log(err));
    }
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup',{
        pageTitle: 'SignUp',
        isLoggedIn: false
    });
};

exports.postSignup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobileNo = req.body.mobileNo;
    console.log(name, email, mobileNo);
    const user = new User(name, email, mobileNo);
    user.save()
    .then(user => {
        console.log(user);
        console.log('User saved in the database');
    }) 
    .catch(err => console.log(err));
    res.redirect('/auth/login');
}

exports.getLogout = (req, res, next) => {
    if(req.session.user){
        req.session.destroy();
        res.clearCookie('connect.sid');
        res.redirect('/');
    }
}