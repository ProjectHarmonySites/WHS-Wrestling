const RosterCards = document.querySelector("#members #cards");

function fillRoster(jsonData) {

    for(let i = 0; i < Object.keys(jsonData).length; i++) { // Loop through the data, but skip the first sample

        // Get the target data
        let targetData = jsonData[Object.keys(jsonData)[i]];

        if(targetData.length != 2) continue; // Make sure that the given entry has enough data

        // Get the member data
        let memberName = Object.keys(jsonData)[i].toUpperCase();
        let grade = targetData[0];
        let position = targetData[1].toUpperCase();

        let shouldUseWeightClass = position !== "MANAGER";

        // Append a new card with the member data
        RosterCards.innerHTML += 
        `
        <div class="card">
            <h1>${memberName}</h1>
            <div>
                <p>Grade: ${grade}</p>
                <p>${shouldUseWeightClass ? "Weight Class" : "Position"}: ${position}</p>
            </div>
        </div>
        `;
    }

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

/* Window on load event listener function */
window.addEventListener('load', function() {

    // Read the roster.json dat and pass it to the fillRoster function.
    readJsonData("client/roster.json", fillRoster);

});