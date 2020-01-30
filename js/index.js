var tableTT = $("#schedule-top-three");
var table = $("#schedule-all");

function load() {
    fetch("../client/schedule.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        console.log("Hey");
        fillOutTable(data);
        fillOutTableThree(data);
    });
}

function fillOutTable(data) {
    for(i = 0; i < Object.keys(data).length; i++) {
        if(data[i].length == 4) {
            console.log(table);
            table.append(`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td>${data[i][2]}</td>
                <td class="place" onclick="findSchool(this);">${data[i][3]}</td>
             </tr>`);
        }
    }
}

function fillOutTableThree(data) {
    for(i = 0; i < 3; i++) {
        if(data[i].length == 4) {
            tableTT.append(`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td>${data[i][2]}</td>
                <td class="place" onclick="findSchool(this);">${data[i][3]}</td>
             </tr>`);
        }
    }
} 

function findSchool(text) {
    window.open(`https://www.google.com/maps/search/${text.innerHTML}, NJ`);
}

load();