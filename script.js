//First we create variables for the input box data and the list content
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

//We initiate a function for adding tasks
function addTask(){
    //We assert that the input is not empty
    if(inputBox.value === ''){
        alert ("You must write something")
    }else{
        //We create the li element -> store the input data to it -> add it to the ul element
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //We create a span element containing the "x" character and add it to the list element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Event listener for clicks to mark as checked or delete list element
listContainer.addEventListener("click", function(e){
    //To toggle check we need to click on the li element
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    //To remove we need to click the "x" element
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Function to save our data into the browser 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to show our saved data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();