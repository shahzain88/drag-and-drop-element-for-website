const clock = document.querySelector("body > div");
const body = document.querySelector("body");

const tick = () => {

    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // console.log(hour, min, sec)

    const htmlClockTemp = `
    <span>${hour}</span> :
    <span>${min}</span> :
    <span>${sec}</span>    
    `;
    clock.innerHTML = htmlClockTemp;
}
setInterval(tick, 1000);

//when the mouse is clecked youcan move else can't


function move(e) {
    clock.style.top = e.pageY;
    clock.style.left = e.pageX;
}

body.addEventListener("mousedown", (eDoc) => {


    if (eDoc.target == clock) {


        console.log(eDoc)

        clock.classList = "clockGrabed";
        eDoc.movementX += 10;
        eDoc.movementY += 10;
        body.addEventListener("mousemove", move);
    }

});

body.addEventListener("mouseup", () => {
    clock.classList = "clockNorm"
    body.removeEventListener("mousemove", move);

});



