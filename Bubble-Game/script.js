function makeBubble(){
    var clutter = '';

for (var i = 0; i < 96; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML = clutter;
}

var newHit = 0;
function getNewHit(){
    newHit = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = newHit;
}

var time = 60;
function timerFunction(){
    var timerInt = setInterval(function(){
        if (time > 0) {
            time--;
            document.querySelector('#timerval').textContent = time;
        } else {
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML = `<h1 id='gameover'>Game Over</h1>`;
        }
    }, 1000);
}

var score = 0;
function updateScore(){
    document.querySelector('#score').textContent = score;
    score += 10;
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
    var bubbleVal = Number(dets.target.textContent);

    if (bubbleVal == newHit) {
        updateScore();
        getNewHit();
        makeBubble();
    }
})

timerFunction();
makeBubble();
getNewHit();
updateScore();