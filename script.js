// Your code here

const newTable = document.getElementsByTagName("table")[0];

const makeRow = () => {
    const tr = document.createElement('tr');
    for(let i = 0; i < 20; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    newTable.appendChild(tr);
}

const newRow = document.getElementById("add-row");
newRow.addEventListener("click", makeRow);




const colorize = (event) => {
    let target = event.target;
    if(target.className.length){
        target.className = ''
    }
    else {
        target.className = color;
    }



}

newTable.addEventListener("click",colorize);

let color = "skyblue";

const selector = document.getElementsByTagName("select")[0];

selector.addEventListener("change",function(event){
    color = event.target.value;
});



const newFunction = (event) => {
    color = event.target.value;
}
selector.addEventListener("change",newFunction);
