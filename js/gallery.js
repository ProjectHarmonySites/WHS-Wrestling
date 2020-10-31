var gallery;

function load() {
    var jsonData;

    fetch("../images/gallery/gallery.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        let imageArray = data["active_images"];
        addImages(imageArray);
    });

}

function addImages(imageArray) {
    gallery = document.getElementById("gallery-images");

    for(let i = 0; i < imageArray.length; i++) {
        gallery.innerHTML += `<div class="img"><img src="images/gallery/${imageArray[i]}.jpg" alt="${imageArray[i]}" /></div>`
    }
}

load();