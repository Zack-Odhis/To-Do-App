
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value.trim() === '') {
        document.getElementById("error-message").innerText = "Task cannot be empty!";
        inputBox.focus(); //puts cursor back in the box so that we can coninue typing
        return;  // Stops the function here if input is empty
    } 

    document.getElementById("error-message").innerText = "";  // Clear error message
    let li = document.createElement("li"); // creates a new li element (task of iem in the list)
    li.innerHTML = inputBox.value; // Sets the text of the <li> to the value inside the input box.
    listContainer.appendChild(li); // Adds the new <li> to the unordered list (<ul>), making it appear on the page.
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    inputBox.focus();
    saveData();
 }
 function handleEnter(event){
    if(event.key === "Enter"){
        event.preventDefault();
        addTask();
    }
 }
 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 }, false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();  
