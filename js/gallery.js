const FullscreenImage       = document.querySelector("#fullscreen-img");
const ImageName             = document.querySelector("#fullscreen-img h3");
const Image                 = document.querySelector("#fullscreen-img .image-container img");
const ImageClose            = document.querySelector("#fullscreen-img .x");
const ImageArrowLeft        = document.querySelector("#fullscreen-img .left-arrow");
const ImageArrowRight       = document.querySelector("#fullscreen-img .right-arrow");
const Gallery               = document.getElementById("gallery-images")

var currentImage;
var imagesArray = [];

// Function to add the images to the gallery
function addImages(imagePaths) {

    // Loop through all of the images and ...
    for(let i = 1; i < imagePaths.length; i++) { // Skip the first entry
        let splitImageName = imagePaths[i].href.split("/");
        let imageName = splitImageName[splitImageName.length - 1].split(".")[0];

        let imageHtml = `<img onclick="fullscreenImage(this);" src="${imagePaths[i].href}" alt="${imageName}" />`;
        Gallery.innerHTML += `<div class="img">${imageHtml}</div>`;
        imagesArray.push(Gallery.childNodes[i - 1].childNodes[0]);
    }

}

function indexArray(image) { return currentImage.outerHTML === image.outerHTML; }

function setupFullscreenControls() {
    ImageClose.onclick = handleCloseFullscreenControls;

    ImageArrowLeft.onclick = handleSelectPreviousImage;
    ImageArrowRight.onclick = handleSelectNextImage;
}

function handleCloseFullscreenControls() {
    if(FullscreenImage.classList.contains("hidden")) return;

    FullscreenImage.classList.add("hidden"); // Hide the fullscreen controls
    currentImage = null; // Clear the current image
    Image.src = ""; // Clear the current image source
    ImageName.innerHTML = ""; // Clear the current image name
}

function handleSelectPreviousImage() {
    if(currentImage == null || currentImage == NaN) return;

    let index = imagesArray.findIndex(indexArray);
    if(index == -1) return;
    
    index--;
    if(index < 0) index = imagesArray.length - 1;
    
    fullscreenImage(imagesArray[index]);

}

function handleSelectNextImage() {
    if(currentImage == null || currentImage == NaN) return;

    let index = imagesArray.findIndex(indexArray);
    if(index == -1) return;

    index++;
    if(index >= imagesArray.length) index = 0;

    fullscreenImage(imagesArray[index]);
}

function fullscreenImage(image) {
    currentImage = image;

    let imageName = image.alt.replaceAll("_", " ");

    Image.src = image.src;
    ImageName.innerHTML = imageName;

    FullscreenImage.classList.remove("hidden");
}

function loadImages() {
    let request = new XMLHttpRequest();
    request.open('GET', "client/gallery-images", true);
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == "200") {
            let parser = new DOMParser();
            let html = parser.parseFromString(request.responseText, "text/html");
            let files = html.querySelectorAll(".directory #files li a");

            addImages(files);
        }
    };

    request.send(null);

}

// On Window Load
window.addEventListener('load', function() {

    setupFullscreenControls();
    loadImages();
    
});