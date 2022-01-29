const Twilio = require('../models/twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const createService = () => {
    client.verify.services.create({
        friendlyName: 'My First Verify Service'
    })
    .then(service => {
        const twilio = new Twilio(service.sid);
        // console.log(service);
        return twilio.save()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

const sendToken = mobileNo => {
    return Twilio.findSid()
    .then(res => {
        // console.log(mobileNo);
        // console.log(res);
        const sid = res[0].sid;
        return client.verify.services(sid)
        .verifications
        .create({to:`+91${mobileNo}`, channel: 'sms'});
    })
    .catch(err => console.log(err));
};

const verifyToken = (mobileNo, otp) => {
    return Twilio.findSid()
    .then(res => {
        const sid = res[0].sid;
        return client.verify.services(sid)
        .verificationChecks
        .create({to: `+91${mobileNo}`, code: `${otp}`});
    })
    .catch(err => console.log(err));
}

const sendSMS = (phoneNo, message) => {
    return client.messages
    .create({
        body: message,
        from: process.env.TWILIO_TRIAL_NUMBER,
        to: `+91${phoneNo}`
    });
};

module.exports = {
    createService: createService,
    sendToken: sendToken,
    verifyToken: verifyToken,
    sendSMS: sendSMS
}