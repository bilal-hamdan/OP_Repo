class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

let people = [];

function addRow() {
    let name = document.getElementById("nameInput").value.trim();
    let age = document.getElementById("ageInput").value.trim();
    let job = document.getElementById("jobInput").value.trim();

    if (name === "" || age === "" || job === "") {
        alert("Please fill all fields before adding a row.");
        return;
    }

    let person = new Person(name, age, job);
    people.push(person);  

    let table = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.job}</td>
        <td>
            <button class="delete-btn" onclick="deleteRow(this, '${person.name}')">Delete</button>
        </td>
    `;

    table.appendChild(newRow);

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("jobInput").value = "";

    console.log(JSON.stringify(people, null, 2));
}

function deleteRow(button, name) {
    let row = button.parentElement.parentElement;
    row.remove();

    people = people.filter(person => person.name !== name);

    console.log("Updated JSON Data:", JSON.stringify(people, null, 2));
}