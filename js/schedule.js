var table = $("#schedule-all");


function load() {
    fetch("../client/schedule.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        fillOutTable(data);
    });
}


function fillOutTable(data) {
    var todayRaw = new Date();
    var today = new Date(`${todayRaw.getMonth() + 1}/${todayRaw.getDate()}/${todayRaw.getFullYear()}`);

    var itemCount = 0;

    for(i = 0; i < Object.keys(data).length; i++) {
        if(data[i].length == 4) {

            var target = new Date(data[i][1]);

            if(target.getTime() >= today.getTime()) {
                itemCount++;
                table.append(`
                <tr>
                    <td>${data[i][0]}</td>
                    <td>${data[i][1]}</td>
                    <td>${data[i][2]}</td>
                    <td class="${data[i][3] === "TBD" ? "tbd-place" : "place"}" ${data[i][3] === "TBD" ? "" : 'onclick="findSchool(this);"'}>${data[i][3]}</td>
                </tr>`);
            }
        }
    }

    if(itemCount <= 0) {
        document.querySelector("#schedule-all").classList.add("change-margin-bottom");
        document.querySelector(".table-container").innerHTML += `
        <h1 id="table-no-events" style="text-align: center; ">No Upcoming Events</h1>
        `;
    }
}

function findSchool(text) {
    window.open(`https://www.google.com/maps/search/${text.innerHTML}, NJ`);
}

load();