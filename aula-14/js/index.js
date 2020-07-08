start();

function start() {
    loadDataFromServer();
    let saveButton = document.getElementById('addCourseBtn');
    saveButton.onclick = function() {
       save();
    };
}

function loadDataFromServer() {
    $.get('https://pacific-wave-50441.herokuapp.com/api/courses', function(data) {
        addDataInTable(data);
    });
}

function addDataInTable(data) {
    let table = document.getElementById('cursos');
    let tbody = table.tBodies[0];
    tbody.innerHTML = '';

    data.forEach(function(item) {
        let line = document.createElement('tr');
        
        let nameColumn = document.createElement('td');
        nameColumn.innerHTML = item.name;
        line.appendChild(nameColumn);

        let workloadColumn = document.createElement('td');
        workloadColumn.innerHTML = item.workload;
        line.appendChild(workloadColumn);

        tbody.appendChild(line);
    });
}

function save() {
    let newCourse = {
        name: document.getElementById('name').value,
        workload: document.getElementById('workload').value
    };
    
    $.post("https://pacific-wave-50441.herokuapp.com/api/courses", newCourse).done(function() {
        loadDataFromServer();
    });
}