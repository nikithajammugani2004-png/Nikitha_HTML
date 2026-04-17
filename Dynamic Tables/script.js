const addBtn = document.getElementById("addBtn");
const inputArea = document.getElementById("inputBox");

addBtn.addEventListener("click", addRow);

function addRow() { 
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let nameVal = nameInput.value.trim();
    let emailVal = emailInput.value.trim();

    // Validation with Shake Effect
    if(nameVal === "" || emailVal === "") {
        inputArea.classList.add("shake");
        setTimeout(() => inputArea.classList.remove("shake"), 400);
        return;
    }

    let tableBody = document.getElementById("tableBody");
    let row = document.createElement("tr");

    row.innerHTML = ` 
        <td>${nameVal}</td>
        <td>${emailVal}</td>
        <td>
            <button class="editBtn" onclick="editRow(this)">Edit</button>
            <button class="deleteBtn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Clear Inputs
    nameInput.value = "";
    emailInput.value = "";
    nameInput.focus();
}

function deleteRow(button) {
    let row = button.closest("tr");
    row.style.opacity = "0";
    row.style.transform = "translateX(20px)";
    setTimeout(() => row.remove(), 300); // Wait for transition to finish
}

function editRow(button) {
    let row = button.closest("tr");
    let nameCell = row.cells[0];
    let emailCell = row.cells[1];

    let newName = prompt("Edit Student Name:", nameCell.innerText);
    let newEmail = prompt("Edit Student Email:", emailCell.innerText);

    if(newName !== null && newName.trim() !== "") {
        nameCell.innerText = newName;
    }
    if(newEmail !== null && newEmail.trim() !== "") {
        emailCell.innerText = newEmail;
    }
}
