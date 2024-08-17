// const  listContainer  =document.getElementById('list-container');
// const  inputBox  = document.getElementById('list-container');

// function addTask(){
//     if(inputBox.value===''){
//         alert("Enter some data")
//     }else{
//         let li = document.createElement("li")
//         li.innerHTML= inputBox.value;
//         listContainer.appendChild(li);

//     }
//     inputBox.value  =" ";
//     saveTask()
// }
// function saveTask(){
//     localStorage.setItem("data",listContainer.innerHTML)
// }
// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data")
// }
// showTask()

// Function to add a new task to the list
function addTask() {
    // Get the value from the input box
    let inputBox = document.getElementById("input-box");
    let task = inputBox.value.trim();

    // If the input is empty, return without adding a task
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = task;

    // Create Update and Delete buttons
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "update-btn";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Append buttons to the list item
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    // Append the new list item to the list container
    let listContainer = document.getElementById("list-container");
    listContainer.appendChild(li);

    // Clear the input box
    inputBox.value = "";

    // Add click event to toggle 'checked' class
    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    // Add event to delete the task
    deleteBtn.addEventListener("click", function () {
        listContainer.removeChild(li);
    });

    // Add event to update the task
    updateBtn.addEventListener("click", function () {
        let newTask = prompt("Update your task:", li.firstChild.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask.trim();
        }
    });
}
