window.addEventListener("load", function(){
    var link:string [] = ['A.mp3','C.mp3','F.mp3','G.mp3','hihat.mp3','kick.mp3','snare.mp3','laugh-1.mp3','laugh-2.mp3'];
    var order:string [] = ['snare.mp3','kick.mp3','hihat.mp3','snare.mp3'];
    var key:number = 0;

document.querySelector(".knopf1").addEventListener("click", function () {playSample(link[4]);});
document.querySelector(".knopf2").addEventListener("click", function () {playSample(link[5]);});
document.querySelector(".knopf3").addEventListener("click", function () {playSample(link[6]);});
document.querySelector(".knopf4").addEventListener("click", function () {playSample(link[0]);});
document.querySelector(".knopf5").addEventListener("click", function () {playSample(link[1]);});
document.querySelector(".knopf6").addEventListener("click", function () {playSample(link[2]);});
document.querySelector(".knopf7").addEventListener("click", function () {playSample(link[3]);});
document.querySelector(".knopf8").addEventListener("click", function () {playSample(link[7]);});
document.querySelector(".knopf9").addEventListener("click", function () {playSample(link[8]);});
document.querySelector(".knopf10").addEventListener("click", playBeat)

function playSample(tlink:string) {
    var ton:HTMLAudioElement = new Audio (tlink);
    ton.play()
}
function playBeat(){
setInterval(function() {
    var beat:HTMLAudioElement = new Audio(order[key]);
    beat.play()
    key++;
    if (key>order.length)
    {key = 0;}
},250)}

});

