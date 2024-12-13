let todo = [];
let req = prompt("enter a request");

while(true){

    if( req == "quit"){
        console.log("quitting todo.");
        break;                        
    } else if(req == "add"){
        todo.push(prompt("enter a task to add"));
        console.log(" task added");
    } else if(req == "list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if(req == "delete"){
        let idx = prompt("enter the index of the task to be deleted");
        todo.splice(idx,1);
        console.log("task deleted.");
    }  
    else {
        console.log("enter a valid request.");
    }

    req = prompt("enter a request");
}