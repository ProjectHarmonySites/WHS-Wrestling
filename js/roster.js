const cardLocation = document.querySelector("#card-location");

function load() {
    fetch("../client/roster.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        fillOutRoster(data);
    });
}

function fillOutRoster(data) {

    for(var item in data) {
        if(data[item] instanceof Object) {
            if(item.startsWith("__")) continue;

            let name = item.toString();
            let personData = data[item];

            // If gender neutral is needed just update the below ternary operator of code.
            let htmlData = `
            <div class="col-md-4 card-wrapper">
                <div class="card">
                    <h1>${name}</h1>
                    <p>Gender: ${personData[0] == "F" ? "Female" : "Male"}</p>
                    <p>Grade: ${personData[1]}</p>
                    <p>${typeof personData[2] == "string" ? "Position" : "Weight"}: ${personData[2]}</p>
                </div>
            </div>
            `

            cardLocation.innerHTML += htmlData;
        }
    }

}

load();