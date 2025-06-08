var timer = 60;
var score = 0;
var HitNumber = 0;


function makeBubble() {
  var cluster = "";
  for (var i = 0; i <= 104; i++) {
    cluster += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = cluster;
}

function runtimer() {
  var countdown = setInterval(function () {
    if(timer>0){
        timer--;
        document.querySelector(".timeInterval").textContent = timer;
    }else{
        clearInterval(countdown)
        document.querySelector(".pbtm").innerHTML = `<div>Time Over</div>`;
        document.querySelector(".pbtm").style = `font-weight: 600; font-size: 4vw`;
    }
    
  }, 1000);
}

function hitting(){
    HitNumber = Math.floor(Math.random()*10);
    document.querySelector(".hitNum").textContent= HitNumber;
    
}

function IncreaseScore(){
    score += 10;
    document.querySelector(".ScoreNum").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var ClickedNum = Number(dets.target.textContent);
    if(ClickedNum === HitNumber && timer>0){
        IncreaseScore();
        makeBubble();
    }
})

runtimer();

makeBubble();

hitting();