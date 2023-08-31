const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const main = document.querySelector("#main");
const mouseMove = document.querySelector("#mousecircle");

main.addEventListener('mousemove', function(dets){
    mouseMove.style.left = dets.x+"px";
    mouseMove.style.top = dets.y+"px";
})