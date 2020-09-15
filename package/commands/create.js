const { Console } = require('console');
var fs = require('fs');
var path = require('path');


exports.create = function(filepath, filename) {
    var source = path.join(__dirname, '../template/');  //!linux
    var target = path.join(filepath, filename);

    console.log("\nCreating a new project\n");

    if (fs.existsSync(target)) {
        console.log('Oops... Project Already exists!');
        return;
    }

    copyFolderSync(source, target);

    console.log('Setting up Node modules for server, Please wait...');

    setupServer(target, filename);
}

function copyFolderSync(source, target) {
    fs.mkdirSync(target);
    fs.readdirSync(source).forEach(element => {
        if (fs.lstatSync(path.join(source, element)).isFile()) {
            console.log('Creating file: ' + element);
            fs.copyFileSync(path.join(source, element), path.join(target, element));
        } else {
            console.log('Creating folder: ' + element);
            copyFolderSync(path.join(source, element), path.join(target, element));
        }
    });
}

function setupServer(target, filename) {
    var nodeinit = {
        "name": filename,
        "version": "1.0.0",
        "description": filename + " is a new node project created with boilnode",
        "main": "app.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "node app.js"
        },
        "keywords": [
            filename,
          "nodestart"
        ],
        "author": "",
        "license": "ISC",
        "engines": {
          "node": "14.4.0"
        }
    };

    fs.writeFile(target + "/package.json", JSON.stringify(nodeinit), err => { 
        if (err) throw err;  
    }); 
    
    exec("pushd "+target+"\\ && npm install express body-parser && npm install nodemon --save-dev && echo Make Beautiful Web Apps! All the best :)");
}

function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
