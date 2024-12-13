let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
// inp.addEventListener("change", function(){
//     let task = document.createElement('li');
//     task.innerText = this.value;
//     document.querySelector('ul').append(task);
//     inp.value = "";
// })

btn.addEventListener("click", function(){
    let task = document.createElement('li');
    task.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("del");
    task.appendChild(delbtn);

    document.querySelector('ul').append(task);

    inp.value = "";
})

ul.addEventListener("click", function(event){    
    if(event.target.nodeName = "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})

// let delbtns = document.querySelectorAll(".del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }  this wont work with new del btns
