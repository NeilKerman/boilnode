//----
const CreateProject = require('./create');
const Help = require('./help');
//----- Getting the commmands and arguments from the bat file
var comm = process.argv;
//-----**-----//

/*
    comm is expected to have 
    - path to node.exe as index 0
    - path to this file as index 1
*/

switch(comm.length){
    case 3:
        Help.showHelp();
    break;

    case 4:
        checkCommandArgLess(comm);
    break;

    case 5:
        checkCommandWithArgs(comm);
    break;

    default:
        console.log("Invalid Command");
    break;
}



function checkCommandArgLess(comm){
    switch(comm[3]){
        case 'run':
            
        break;
    
        default:
            console.log('No such commands called "'+comm[3]+'"');
    }
}

function checkCommandWithArgs(comm){
    switch(comm[3]){
        case 'create':
            CreateProject.create(comm[2], comm[4]);
        break;
    
        default:
            console.log('No such commands called "'+comm[3]+'"');
    }
}

