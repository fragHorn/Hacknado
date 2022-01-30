const { spawn } = require('child_process');

const sendImageFile = (imagePath) => {
    const childPython = spawn('python', ['E:/Practice/Python/coursera/errorHandling.py', `1`]);
    childPython.stdout.on('data', data => {
        console.log(`On stdout data is: ${data}`);
        return data;
    });

    childPython.stderr.on('data', data => {
        console.log(`On stderr data is: ${data}`);
        return new Error('Could not execute the command!!!');
    });

    childPython.on('close', code => {
        console.log(`Child Process exited with code ${code}`);
    });

};

module.exports = {
    sendImageFile: sendImageFile
};