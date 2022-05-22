const { spawn } = require('child_process');
const { callbackify } = require('util');

let res;

const sendImageFile = (callback) => {
    const childPython = spawn('python', ["../ML-MODEL/app.py", `1`]);
    childPython.stdout.on('data', data => {
        console.log(`On stdout data is: ${data}`);
        res = true;
        return data;
    });

    childPython.stderr.on('data', data => {
        console.log(`On stderr data is: ${data}`);
        res = false;
        return new Error('Could not execute the command!!!');
    });

    childPython.on('close', code => {
        console.log(`Child Process exited with code ${code}`);
        console.log(code);
        callback();
        return ;
    });
};

sendImageFile(() => console.log(res));

module.exports = {
    sendImageFile: sendImageFile
};