var tableTT = $("#schedule-top-three");

function load() {
    fetch("../client/schedule.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        fillOutTableThree(data);
    });
}

function fillOutTableThree(data) {
    var todayRaw = new Date();
    var today = new Date(`${todayRaw.getMonth() + 1}/${todayRaw.getDate()}/${todayRaw.getFullYear()}`);

    i = 0;
    s = 0;
    
    var itemCount = 0;

    while(i < Object.keys(data).length) {
        if(data[i].length == 4) {
            var target = new Date(data[i][1]);

            if(target.getTime() >= today.getTime()) {
                tableTT.append(`
                <tr>
                    <td>${data[i][0]}</td>
                    <td>${data[i][1]}</td>
                    <td>${data[i][2]}</td>
                    <td class="${data[i][3] === "TBD" ? "tbd-place" : "place"}" ${data[i][3] === "TBD" ? "" : 'onclick="findSchool(this);"'}>${data[i][3]}</td>
                </tr>`);
                s++;

                itemCount++;
            }   
            if(s >= 3) {
                break;
            }
        }
        i++;
    }

    if(itemCount <= 0) {
        document.querySelector("div#table-ext").innerHTML = '<h1 id="table-no-events">No Upcoming Events</h1>';
    }
} 

function findSchool(text) {
    window.open(`https://www.google.com/maps/search/${text.innerHTML}, NJ`);
}

load();