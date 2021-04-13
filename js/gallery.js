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

    let imageNames = imagePaths["selected_images"];

    // Loop through all of the images and ...
    for(let i = 0; i < imageNames.length; i++) { 
        let imageName = imageNames[i].split(".");
        imageName = imageName[0].replaceAll("_", " ");


        let imageHtml = `<img onclick="fullscreenImage(this);" src="/client/gallery-images/${imageNames[i]}" alt="${imageName}" />`;
        Gallery.innerHTML += `<div class="img">${imageHtml}</div>`;
        imagesArray.push(Gallery.childNodes[i].childNodes[0]);
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


// On Window Load
window.addEventListener('load', function() {

    setupFullscreenControls();
    readJsonData("client/gallery-images.json", addImages);
    
});