interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New york"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "los angeles"
};

const studentsList: Array<Student> = [student1, student2];

//render the table
const table = document.createElement('table');

//create a table header
const header = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.innerText = "firstName";
const locationHeader = document.createElement('th');
locationHeader.innerText = "location";
headerRow.append(firstNameHeader, locationHeader);
header.append(headerRow);
table.append(header);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    firstName.innerText = student.firstName;
    const location = document.createElement('td');
    location.innerText = student.location;
    row.append(firstName, location);
    tbody.append(row);
});
table.append(tbody);

document.body.append(table);

// Path: 0x04-TypeScript/task_0/js/main.ts