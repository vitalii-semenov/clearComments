const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'commentsTest.js');

const clearComments = (data) => {
    const regEx = /(\/\/.*)|(\/\*[.\s\S]*?\*\/)/gm;
    let res = data.replace(regEx, '');
    fs.writeFile(pathToFile, res, err => {
        if (err) throw new Error;
        console.log('Comments successfully deleted')
    });
}

fs.readFile(
    pathToFile,
    'utf-8',
    (err, data) => {
        if (err) throw new Error;
        clearComments(data);
    }
)