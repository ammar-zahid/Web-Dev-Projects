const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const mouseMove = document.querySelector("#mousecircle");

function mouseMoveAnim(x, y){

window.addEventListener('mousemove', function(dets){
    mouseMove.style.left = dets.x+"px";
    mouseMove.style.top = dets.y+"px";
    mouseMove.style.transform = `scale(${x}, ${y})`;
})
}

var timeout;

function circleChaptaKaro(){
    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
    clearInterval(timeout)
       var xdiff =  dets.clientX - xprev;
       var ydiff = dets.clientY - yprev;
       
       xscale = gsap.utils.clamp(.8, 1.2, xdiff);
       yscale = gsap.utils.clamp(.8, 1.2, ydiff);

       xprev = dets.clientX;
       yprev = dets.clientY;

       mouseMoveAnim(xscale, yscale);
       timeout = setTimeout(function(){
        mouseMove.style.transform = `scale(1, 1)`;
       }, 100)
    });
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem", {
        y: -4,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })

    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 1.5,
    })
    
}

mouseMoveAnim();
firstPageAnim();
circleChaptaKaro();