const inputBox = document.getElementById("taskInput"); // Make sure this ID matches your HTML
const listContainer = document.getElementById("taskList");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        // Create the delete "X"
        let span = document.createElement("span");
        span.textContent = "\u00d7"; // This is the 'x' symbol
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Handle Clicks (Checking off or Deleting)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// --- THE LOCAL STORAGE FUNCTIONS ---

function saveData() {
    // Saves the current state of the list container to local storage
    localStorage.setItem("studyTasks", listContainer.innerHTML);
}

function loadTasks() {
    // Loads the saved HTML and puts it back into the container
    const savedData = localStorage.getItem("studyTasks");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Call loadTasks immediately when the script runs
loadTasks();

   