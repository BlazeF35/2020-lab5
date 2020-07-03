start();

function start() {
    $.get('https://pacific-wave-50441.herokuapp.com/api/courses', function(data) {
        addDataInTable(data);
    });
}

function addDataInTable(data) {
    let table = document.getElementById('cursos');
    let tbody = table.tBodies[0];

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