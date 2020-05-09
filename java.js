let star1=document.querySelector("#star1");
let star2=document.querySelector("#star2");
let star3=document.querySelector("#star3");
let star4=document.querySelector("#star4");
let bstar=document.querySelector("#bstar");
let heart=document.querySelector("#heart");
let circle=document.querySelector("#circle");
let rect=document.querySelector("#rect");
let cross=document.querySelector("#cross");
let time=document.querySelector("#time");
let mute=document.querySelector("#setsound");
let startButton=document.querySelector("#start_button");
let startBg=document.querySelector("#start_background");
let sliderInput=document.querySelector("#sliderinput");
let volume=document.querySelector("#volume");

let bgMusic=document.querySelector("#sound_music");
let soundMiss=document.querySelector("#sound_miss");
let soundDrop=document.querySelector("#sound_drop");
let soundGameover=document.querySelector("#sound_gameover");
let soundNo=document.querySelector("#sound_no");
let soundyes=document.querySelector("#sound_yes");
let soundlevel=document.querySelector("#sound_lev");

let timeLeft =60;
let points=0;
let lives=3;
let pos=0;
let mut=0;
let count=10;
window.addEventListener("load", userStart);

function userStart(){
    console.log("userStart");
    startButton.addEventListener("click", start);
    startBg.classList.add("startanimation");
   document.querySelector("#setting").addEventListener("click", settingCont); 
    
    document.querySelector("#start_container").style.display="block";
  document.querySelector("#setsound").addEventListener("click", setMute);
    mute.classList.add("son");
}

function setMute(){
    if(bgMusic.muted==false){
       bgMusic.muted=true;
         mute.classList.remove("son");
       mute.classList.add("soff");
        
    }
    else{
        bgMusic.muted=false;
        mute.classList.remove("soff");
          mute.classList.add("son");
    }
    
}

function  settingCont() {
   console.log("setting");
   stopFalling(); 
    missSound.muted=true;
 document.querySelector("#game").classList.add("blur");
   ;
   
   sliderInput.addEventListener("input", moveSlider); document.querySelector("#setting_container").style.display="block";
    
   document.querySelector("#back").addEventListener("click", falling) ; 
    
}
function moveSlider() {
    volume.innerHTML=sliderInput.value;
  bgMusic.volume=sliderInput.value/100;
}
function start() {
    console.log("startGame");
    falling();
    playMusic();
    position();
    startTimer();
    document.querySelector("#start_container").style.display="none";
   document.querySelector("#start_container").classList.add("fadeout"); document.querySelector("#start_container").classList.add("displayn");
    bgMusic.addEventListener("ended", playMusic);
}


function startTimer() {
    if (timeLeft == 0) {
        gameOver();
    } else {
        setTimeout(printTime, 1000);
    }
}

function printTime() {
    if (timeLeft > 0) {
        timeLeft--;
        console.log("Time: " + timeLeft);

        document.querySelector("#time_board").textContent = timeLeft;
        startTimer();
    } else {
        gameOver();
    }
}

function position(){
    console.log("randome position1")
 let pos=Math.floor(Math.random()*4)+1;
    console.log("your position="+ pos);
}
function missSound() {
    console.log("missed sound");
    soundMiss.play();
}
function playMusic(){
console.log("play music");
    bgMusic.play(); //remember
    
    document.querySelector("#game_elements").addEventListener("click", missSound);
}
function muteSound() {
    console.log("mute")
    bgMusic.muted();
}

function falling() {
    console.log(" falling");
    
    document.querySelector("#game").classList.remove("blur");
   document.querySelector("#setting_container").style.display="none";
    
   /* Gamestart*/
       document.querySelector("#star1").classList.add("falling");
     document.querySelector("#star1").classList.add("speed1");
    document.querySelector("#star1").addEventListener("click", clickStar1);
    
      document.querySelector("#star2").classList.add("falling");
     document.querySelector("#star2").classList.add("speed2");
    document.querySelector("#star2").addEventListener("click", clickStar2);
    
      document.querySelector("#star3").classList.add("falling");
     document.querySelector("#star3").classList.add("speed3");
    document.querySelector("#star3").addEventListener("click", clickStar3);
    
      document.querySelector("#star4").classList.add("falling");
     document.querySelector("#star4").classList.add("speed4");
    document.querySelector("#star4").addEventListener("click", clickStar4);
    
     document.querySelector("#bstar").classList.add("falling");
    document.querySelector("#bstar").classList.add("speed2");
     document.querySelector("#bstar").addEventListener("click", clickBstar);
    
     document.querySelector("#time").classList.add("falling");
     document.querySelector("#time").classList.add("speedt");
    document.querySelector("#time").addEventListener("click", clickTime);
    
    
     document.querySelector("#circle").classList.add("falling");
     document.querySelector("#circle").classList.add("speed3");
    document.querySelector("#circle").addEventListener("click", clickCircle);
    
    document.querySelector("#cross").classList.add("falling");
     document.querySelector("#cross").classList.add("speed5");
    document.querySelector("#cross").addEventListener("click", clickCross);
    
    document.querySelector("#heart").classList.add("falling");
     document.querySelector("#heart").classList.add("speedh");
    document.querySelector("#heart").addEventListener("click", clickHeart);
    
     document.querySelector("#rect").classList.add("falling");
     document.querySelector("#rect").classList.add("speed8");
    document.querySelector("#rect").addEventListener("click", clickRect);
}

function clickStar1(e) {
    console.log("clickStar1");
    soundDrop.play();
    
    
    star1.removeEventListener("click", clickStar1);
    star1.classList.add("pause");
    document.querySelector("#star1 .star1").classList.add("zoom");
    
    
    points++;
    console.log("your points"+points);
    document.querySelector("#points").textContent="Points=" + points;
    if (points==20){
        levelComplete();
    }
    else{
        star1.addEventListener("animationend", restartStar1);
    }
    
    
    e.stopPropagation();
}
function restartStar1() {
    console.log("restartStar1");
    star1.removeEventListener("animationend", restartStar1);
       star1.classList.remove("pause");
    document.querySelector("#star1 .star1").classList.remove("zoom");
    
    star1.classList.remove("falling");
    star1.offsetHeight;
    star1.classList.add("falling");
    
    star1.addEventListener("click", clickStar1);
}

function clickStar2(e) {
    console.log("clickStar2");
    star2.removeEventListener("click", clickStar2);
   
    star2.classList.add("pause");
    document.querySelector("#star2 .star2").classList.add("zoom");
  
    soundDrop.play();
    
      points++;
    console.log("your points"+points);
    document.querySelector("#points").textContent="Points=" + points;
     if (points==20){
        levelComplete();
    }
    else{
          star2.addEventListener("animationend", restartStar2);
    }
    e.stopPropagation();
}
function restartStar2() {
    console.log("restartStar2");
    star2.removeEventListener("animationend", restartStar2);
       star2.classList.remove("pause");
    document.querySelector("#star2 .star2").classList.remove("zoom");
    
    star2.classList.remove("falling");
    star2.offsetHeight;
    star2.classList.add("falling");
    
    star2.addEventListener("click", clickStar2);
    
}

function clickStar3(e) {
    console.log("clickStar3");
    star3.removeEventListener("click", clickStar3);
    star3.classList.add("pause");
    document.querySelector("#star3 .star3").classList.add("zoom");
    star3.addEventListener("animationend", restartStar3);
    soundDrop.play(); 
      points++;
    console.log("your points"+points);
    document.querySelector("#points").textContent="Points=" + points;
     if (points==20){
        levelComplete();
    }
 e.stopPropagation();
}
function restartStar3() {
    console.log("restartStar3");
    star3.removeEventListener("animationend", restartStar3);
       star3.classList.remove("pause");
    document.querySelector("#star3 .star3").classList.remove("zoom");
    
    star3.classList.remove("falling");
    star3.offsetHeight;
    star3.classList.add("falling");
    
    star3.addEventListener("click", clickStar3);
    
}

function clickStar4(e) {
    console.log("clickStar4");
    star4.removeEventListener("click", clickStar4);
    star4.classList.add("pause");
    document.querySelector("#star4 .star4").classList.add("zoom");
    star4.addEventListener("animationend", restartStar4);
     
      points++;
    console.log("your points"+points);
    document.querySelector("#points").textContent="Points=" + points;
    if (points==20){
        levelComplete();
    } 
    soundDrop.play();
    
}
function restartStar4() {
    console.log("restartStar4");
    star4.removeEventListener("animationend", restartStar4);
       star4.classList.remove("pause");
    document.querySelector("#star4 .star4").classList.remove("zoom");
    
    star4.classList.remove("falling");
    star4.offsetHeight;
    star4.classList.add("falling");
    
    star4.addEventListener("click", clickStar4);
    soundDrop.play();
 e.stopPropagation();
}

function clickBstar(e) {
    console.log("clickbstar");
    soundNo.play();

   bstar.removeEventListener("click", clickBstar);
    bstar.classList.add("pause");
    document.querySelector("#bstar .bstar").classList.add("zoom");
    document.querySelector("#game").classList.add("shake");
    
     if (lives >= 1){
     //sound
     lives--;
    
    
  removeDisplayb();
           document.querySelector("#hearts_" + (lives+1)).style.display="none";
        bstar.addEventListener("animationend", restartBstar);
console.log("your lives "+ lives);
 }
    else {
        gameOver();
        console.log("gameOver");
    }
    
        bstar.addEventListener("animationend", restartBstar);
    
 timeLeft=timeLeft-5;
    
    e.stopPropagation();
}
function restartBstar() {
    console.log("restartbstar");
   bstar.removeEventListener("animationend", restartBstar);
      bstar.classList.remove("pause");
    document.querySelector("#bstar .bstar").classList.remove("zoom");
    
    bstar.classList.remove("falling");
    bstar.offsetHeight;
    bstar.classList.add("falling");
    
     document.querySelector("#game").classList.remove("shake");
   
    
    bstar.addEventListener("click", clickBstar);
    
}
    
    function removeDisplayb() {
    
         document.querySelector("#hearts_1").classList.add("displayb");
          document.querySelector("#hearts_2").classList.add("displayb");
          document.querySelector("#hearts_3").classList.add("displayb");
    }

function clickCircle(e) {
    console.log("clickCircle");
    soundNo.play();
  circle.removeEventListener("click", clickCircle);
 circle.classList.add("pause");
    document.querySelector("#circle .circle").classList.add("zoom");
   
     document.querySelector("#game").classList.add("shake");
    
     if (lives >=1){
     //sound
     lives--;
            removeDisplayb();
           document.querySelector("#hearts_" + (lives+1)).style.display="none";
           
        
console.log("your lives "+ lives);
       ;
 }
    else {
       gameOver();
    }
     timeLeft=timeLeft-5;
      circle.addEventListener("animationend", restartCircle)
    e.stopPropagation();
}
function restartCircle() {
    console.log("restartCircle");
  circle.removeEventListener("animationend", restartCircle);
    circle.classList.remove("pause");
    document.querySelector("#circle .circle").classList.remove("zoom");
    
   circle.classList.remove("falling");
circle.offsetHeight;
   circle.classList.add("falling");
     document.querySelector("#game").classList.remove("shake");
  circle.addEventListener("click", clickCircle);
    
}

function clickCross(e) {
    console.log("clickcross");
    soundNo.play();
 cross.removeEventListener("click", clickCross);
 cross.classList.add("pause");
    document.querySelector("#cross .cross").classList.add("zoom");
  cross.addEventListener("animationend", restartCross);
       document.querySelector("#game").classList.add("shake");
    
     if (lives >=1){
     //sound
     lives--;
        removeDisplayb();
           document.querySelector("#hearts_" + (lives+1)).style.display="none";
        cross.addEventListener("animationend", restartCross);
console.log("your lives "+ lives);
 }
    else{
     gameOver();
    }
     timeLeft=timeLeft-5;
    e.stopPropagation();
}
function restartCross() {
   console.log("restartcross");
 cross.removeEventListener("animationend", restartCross);
    cross.classList.remove("pause");
    document.querySelector("#cross .cross").classList.remove("zoom");
    
   cross.classList.remove("falling");
cross.offsetHeight;
   cross.classList.add("falling");
     document.querySelector("#game").classList.remove("shake");
  cross.addEventListener("click", clickCross);
  
    
}



function clickRect(e) {
    console.log("clickRect");
    soundNo.play();
 rect.removeEventListener("click", clickRect);
 rect.classList.add("pause");
    document.querySelector("#rect .rect").classList.add("zoom");
   
     document.querySelector("#game").classList.add("shake");
    
     if (lives >0){
     //sound
     lives--;
   
          removeDisplayb();
            document.querySelector("#hearts_" + (lives+1)).style.display="none";
    
        
console.log("your lives "+ lives);
 }
    else{
      gameOver();
        console.log("your life=", lives);
    }

    rect.addEventListener("animationend", restartRect);
     timeLeft=timeLeft-5;
    e.stopPropagation();
}
function restartRect() {
    console.log("restartRect");
  rect.removeEventListener("animationend", restartRect);
    rect.classList.remove("pause");
    document.querySelector("#rect .rect").classList.remove("zoom");
    
   rect.classList.remove("falling");
   rect.offsetHeight;
   rect.classList.add("falling");
     document.querySelector("#game").classList.remove("shake");
   rect.addEventListener("click", clickRect);
    
}


function clickTime(e) {
    console.log("clickTime");
   time.removeEventListener("click", clickTime);
  time.classList.add("pause");
    document.querySelector("#time .time").classList.add("zoom");
    time.addEventListener("animationend", restartTime);
    timeLeft=(timeLeft+5);
     soundyes.play();
    //remove and add position
    removePositiont();
    let pos=Math.floor(Math.random()*4)+1;
    console.log("your position="+ pos);
time.classList.add("position_"+pos);
    
    e.stopPropagation();
}
function restartTime() {
    console.log("restartTime");
  time.removeEventListener("animationend", restartTime);
      time.classList.remove("pause");
    document.querySelector("#time .time").classList.remove("zoom");
    
   time.classList.remove("falling");
   time.offsetHeight;
   time.classList.add("falling");
   time.addEventListener("click", clickTime);
    
}

function removePositiont() {
    console.log(" remove position");
    time.classList.remove("position_1");
     time.classList.remove("position_2");
     time.classList.remove("position_3");
     time.classList.remove("position_4");
    
       heart.classList.remove("position_1");
    heart.classList.remove("position_2");
     heart.classList.remove("position_3");
     heart.classList.remove("position_4");
    
}

function clickHeart(e) {
    console.log("clickHeart");
    console.log("old position removes");
     //life add
     soundyes.play();
    if(lives <4){
        lives++;
        console.log("you new life "+ lives);
        
        document.querySelector("#hearts_"+ lives).style.display="block";
    }
   else{
      heart.addEventListener("animationend", restartHeart); 
   }
    //new position
    removePositiont();
        let pos=Math.floor(Math.random()*4)+1;
    console.log("your position="+ pos);
heart.classList.add("position_"+pos);
    
heart.removeEventListener("click", clickHeart);
heart.classList.add("pause");
    document.querySelector("#heart .heart").classList.add("zoom");
    
   
    heart.addEventListener("animationend", restartHeart); 
  
    e.stopPropagation();
}
function restartHeart() {
    console.log("restartHeart");
  heart.removeEventListener("animationend", restartHeart);
   heart.classList.remove("pause");
    document.querySelector("#heart .heart").classList.remove("zoom");
    
  heart.classList.remove("falling");
  heart.offsetHeight;
  heart.classList.add("falling");
    
  heart.addEventListener("click", clickHeart);
    
}

function removeDisplayn() {
    
         document.querySelector("#hearts_1").classList.remove("displayn");
          document.querySelector("#hearts_2").classList.remove("displayn");
          document.querySelector("#hearts_3").classList.remove("displayn");
    }

function levelComplete() {
    console.log("levelComplete");
    soundlevel.muted=false;
    soundlevel.play();
 if(bgMusic.muted==false){
     bgMusic.muted=true;
     console.log("bgmusic was not mute");
     mute=1;
 }
    timeLeft=timeLeft-timeLeft;
stopFalling();
    
    document.querySelector("#level").style.display="block";
document.querySelector("#level").classList.add("displayb"); 
 document.querySelector("#play_againl").addEventListener("click", gameRestart);
    
}

function stopFalling() {
        star1.classList.remove("falling");
    star2.classList.remove("falling");
    star3.classList.remove("falling");
    star4.classList.remove("falling");
    bstar.classList.remove("falling");
    circle.classList.remove("falling");
    cross.classList.remove("falling");
   rect.classList.remove("falling");
    heart.classList.remove("falling");
    time.classList.remove("falling");
}

function gameOver () {
    console.log("gameOver");
    stopFalling();
 if(bgMusic.muted==false){
     bgMusic.muted=true;
     console.log("bgmusic was not mute");
     mute=1;
 }
     soundGameover.muted=false;
    soundGameover.play();
    
   document.querySelector("#gameover_container").style.display="block";
       timeLeft=timeLeft-timeLeft;
    document.querySelector("#play_again").addEventListener("click", gameRestart);
    
soundGameover.addEventListener("ended", gameOverMusic);
    
}

function gameRestart() {
    
   console.log("gameRestart"); document.querySelector("#gameover_container").style.display="none";

document.querySelector("#level").style.display="none";
  document.querySelector("#play_again").removeEventListener("click", gameRestart);
    
   soundlevel.muted=true;
   soundGameover.muted=true;
    if (mute==1){
        bgMusic.muted=false;
        mut=0;
    }
    lives = (lives - lives) +3;
    points=0;
   removeHearts(); document.querySelector("#hearts_1").style.display="block";
     document.querySelector("#hearts_2").style.display="block";
     document.querySelector("#hearts_3").style.display="block";
    document.querySelector("#level").classList.add("displayn");
    console.log("lives="+ lives);
 
    timeLeft=60;
    points=0;
    
    start();
}
function gameOverMusic (){
   soundGameover.play();
}
function removeHearts(){
     document.querySelector("#hearts_1").classList.add("displayn");
     document.querySelector("#hearts_2").classList.add("displayn");
     document.querySelector("#hearts_3").classList.add("displayn");
}