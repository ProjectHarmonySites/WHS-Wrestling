var tableTT = $("#schedule-top-three");
var table = $("#schedule-all");

function load() {
    fetch("../client/schedule.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        fillOutTable(data);
        fillOutTableThree(data);
    });
}

function fillOutTable(data) {
    var todayRaw = new Date();
    var today = new Date(`${todayRaw.getMonth() + 1}/${todayRaw.getDate()}/${todayRaw.getFullYear()}`);

    for(i = 0; i < Object.keys(data).length; i++) {
        if(data[i].length == 4) {
            var target = new Date(data[i][1]);

            if(target.getTime() >= today.getTime()) {
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
}

function fillOutTableThree(data) {
    var todayRaw = new Date();
    var today = new Date(`${todayRaw.getMonth() + 1}/${todayRaw.getDate()}/${todayRaw.getFullYear()}`);

    i = 0;
    s = 0;

    while(true) {
        if(data[i].length == 4) {
            var target = new Date(data[i][1]);

            if(target.getTime() >= today.getTime()) {
                tableTT.append(`
                <tr>
                    <td>${data[i][0]}</td>
                    <td>${data[i][1]}</td>
                    <td>${data[i][2]}</td>
                    <td class="place" onclick="findSchool(this);">${data[i][3]}</td>
                </tr>`);
                s++;
            }   
            if(s >= 3) {
                break;
            }
        }
        i++;
    }
} 

function findSchool(text) {
    window.open(`https://www.google.com/maps/search/${text.innerHTML}, NJ`);
}

load();