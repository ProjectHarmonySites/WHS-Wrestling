function toggle() {
    var links = document.getElementById("links");

    if(links.classList.contains("moved")) {
        links.classList.remove("moved");
    } else {
        links.classList.add("moved");
    }
}
