const ScheduleTable = document.querySelector("#schedule table");
const ScheduleTableExt = document.querySelector("#schedule #table-ext");

/* Function created to fill out the schedule table on the index page */
function fillTable(jsonData) {

    var currentDate = new Date(); // Get the current date
    currentDate.setDate(currentDate.getDate() - 1); // Decrement to yesterday's date

    var count = 0;

    for(let i = 0; i < Object.keys(jsonData).length; i++) { // Loop through all json entries

        if(count >= 3) break; // Make sure that only the top three get displayed

        let targetData = jsonData[Object.keys(jsonData)[i]];

        if(targetData.length == 3) { // Make sure that the given entry has enough data

            // Make sure that today's date isn't past the entry date
            let rawDate = targetData[0];
            let date = new Date(rawDate);
            if(date.getTime() < currentDate.getTime()) {
                continue; // If the event has passed move onto the next
            }

            // Get all the needed variables for data assignment
            let eventName = Object.keys(jsonData)[i];
            let time = targetData[1];
            let location = targetData[2];

            // Check to see if the location is TBD
            var tbd = false;
            if(location.toLowerCase() === "tbd") {
                tbd = true;
                location = location.toUpperCase();
            }

            // Assign to the table
            ScheduleTable.innerHTML += 
            `
            <tr>
                <td>${eventName}</td>
                <td>${rawDate}</td>
                <td>${time}</td>
                <td class="${tbd ? "tbd-place" : "place"}" onclick="findSchool(this);">${location}</td>
            </tr>
            `

            count++; // Increment the item count variable
        }
    }

    if(count <= 0) {
        ScheduleTableExt.innerHTML = "<h1 id='no-events'>No Upcoming Events</h1>";
    }
}

/* Function called when location is clicked; opens the location as a search in google maps
*/
function findSchool(element) {
    // Get the target location and append NJ USA to it.
    let location = element.innerHTML.trim() + ", NJ USA";

    // Open the location in a Google Maps Search
    window.open(`https://www.google.com/maps/search/${location}`);
}

/** Function created to read json data from local filepath and pass it 
  *  as first parameter to the given "function pointer".
  * @param {string} filepath
  * @param {to} functionPtr
  */
function readJsonData(filepath, functionPtr) {

    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', filepath, true);
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == "200") {
            functionPtr(JSON.parse(request.responseText));
        }
    };

    request.send(null);
}

/* Window on load function */
window.onload = function() {


    // Read the schedule.json data and pass it to the fillTable function.
    readJsonData("client/schedule.json", fillTable);

}