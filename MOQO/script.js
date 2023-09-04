var counter = 0;
function loaderCounter() {
    setInterval(function () {
        counter += Math.floor(Math.random() * 15);

        if (counter < 100) {
            document.querySelector("#loader h1").innerHTML = counter + "%";
        }
        else {
            counter = 100;
            document.querySelector("#loader h1").innerHTML = counter + "%";
        }
    }, 100)
};


var tl = gsap.timeline();
tl.to("#loader h1", {
    scale: 1.5,
    delay: 0.5,
    duration: 1,
    onStart: loaderCounter()
});

tl.to("#loader", {
    y: "-100vh",
    duration: 1.5,
    delay: 0.5
})


gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    fontWeight: 100,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true
    }
})