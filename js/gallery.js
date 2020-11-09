const fullscreen_img = document.querySelector("#fullscreen-img");
const image_name = document.querySelector("#fullscreen-img h3");
const image_img = document.querySelector("#fullscreen-img .image-container img");
const image_close = document.querySelector("#fullscreen-img .x");
const image_arrow_left = document.querySelector("#fullscreen-img .left-arrow");
const image_arrow_right = document.querySelector("#fullscreen-img .right-arrow");

var gallery;
var currentImage;
var imagesArray = [];

function load() {
    var jsonData;

    fullscreenControls();

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
        let imageHTML = `<img onclick="fullscreenImage(this);" src="images/gallery/${imageArray[i]}.jpg" alt="${imageArray[i]}">`;
        gallery.innerHTML += `<div class="img">${imageHTML}</div>`;
        imagesArray.push(gallery.childNodes[i].childNodes[0]);
    }
}

function fullscreenControls() {
    image_close.onclick = closeFullscreenControls;

    image_arrow_left.onclick = previousImage;
    image_arrow_right.onclick = nextImage;
}

function closeFullscreenControls() {
    if(fullscreen_img.classList.contains("hidden")) return;
    fullscreen_img.classList.add("hidden");
    currentImage = null;
    image_img.src = "";
    image_name.innerHTML = "";
}

function indexArray(image) {
    return currentImage.outerHTML === image.outerHTML;
}

function previousImage() {
    if(currentImage == null || currentImage == NaN) return;

    let index = imagesArray.findIndex(indexArray);
    if(index == -1) return;

    index--;
    if(index < 0) index = imagesArray.length - 1;

    fullscreenImage(imagesArray[index]);
}

function nextImage() {
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

    image_img.src = image.src;
    image_name.innerHTML = imageName;

    fullscreen_img.classList.remove("hidden");
}

load();