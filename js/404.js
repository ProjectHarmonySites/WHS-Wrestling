const Links = document.querySelectorAll("nav .website-links .link");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

window.addEventListener('load', async function() {

    while (true) {
        Links[0].classList.toggle("selected");
        await sleep(200);
        Links[2].classList.toggle("selected");
        await sleep(200);
        Links[1].classList.toggle("selected");
        await sleep(200);
        Links[3].classList.toggle("selected");
        await sleep(200);
        Links[4].classList.toggle("selected");
    }

});