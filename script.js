const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Create a new note
createBtn.addEventListener("click", () => {
    let note = document.createElement("div"); // use div for better flexibility
    note.className = "input-box";
    note.setAttribute("contenteditable", "true");
    note.textContent = "New note...";

    // Create delete icon
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "delete.png"; // make sure delete.png is in the same folder
    deleteIcon.alt = "Delete Note";
    deleteIcon.className = "delete-icon";

    // Append delete icon to note
    note.appendChild(deleteIcon);

    // Append note to container
    notesContainer.appendChild(note);

    // Focus on the new note
    note.focus();
});

// Delete note on clicking delete icon
notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-icon")) {
        e.target.parentElement.remove();
    }
});

// Auto-resize note as you type
notesContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("input-box")) {
        e.target.style.height = "auto"; // reset height
        e.target.style.height = e.target.scrollHeight + "px"; // set new height
    }
});
