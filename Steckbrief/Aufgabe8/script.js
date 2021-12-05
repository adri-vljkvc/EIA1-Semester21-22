window.addEventListener("load", function () {
    var link = ["A.mp3", "G.mp3", "F.mp3", "C.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "laugh-1.mp3", "laugh-2.mp3"];
    var reihenfolge = [link[5], link[6], link[5], link[4]];
    var poss = [link[5], link[4], link[6]];
    var aufnahme = [];
    var key = 0;
    var aufnahmeIndex = 0;
    var recordIndex = 0;
    var btn = document.querySelector("#playbutton");
    var recorder = document.querySelector("#record");
    var beat = new Audio(reihenfolge[key]);
    var max = poss.length - 1;
    var intervall = setInterval(rythmus, 200);
    function randomnum(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }
    function remix() {
        for (var i = 0; i <= poss.length; i++) {
            recorder.style.color = "white";
            reihenfolge[i] = poss[randomnum(max)];
        }
    }
    function deleteBeat() {
        reihenfolge.length = 0;
        aufnahmeIndex = 0;
    }
    function rythmus() {
        if (key >= reihenfolge.length)
            key = 0;
        if (btn.getAttribute("class") == "fas fa-stop") {
            beat = new Audio(reihenfolge[key]);
            playSample(reihenfolge[key]);
            key += 1;
        }
    }
    function beatFunktion() {
        if (btn.getAttribute("class") == "fas fa-stop") {
            btn.setAttribute("class", "fas fa-play");
            rythmus();
        }
        else {
            btn.setAttribute("class", "fas fa-stop");
            recorder.style.color = "white";
            if (btn.getAttribute("class") == "fas fa-play") {
                beat.pause();
            }
        }
    }
    function record() {
        reihenfolge = aufnahme;
        recorder.style.color = "red";
    }
    function isEven(recordIndex) {
        return recordIndex % 2 == 0;
    }
    function recording() {
        if (isEven(recordIndex) == true) {
            record();
        }
        else {
            recorder.style.color = "white";
        }
    }
    function playSample(tlink) {
        var ton = new Audio(tlink);
        ton.play();
    }
    document.querySelector(".knopf1").addEventListener("click", function () { playSample(link[4]); aufnahme[aufnahmeIndex] = link[0]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf2").addEventListener("click", function () { playSample(link[5]); aufnahme[aufnahmeIndex] = link[1]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf3").addEventListener("click", function () { playSample(link[6]); aufnahme[aufnahmeIndex] = link[2]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf4").addEventListener("click", function () { playSample(link[0]); aufnahme[aufnahmeIndex] = link[3]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf5").addEventListener("click", function () { playSample(link[1]); aufnahme[aufnahmeIndex] = link[4]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf6").addEventListener("click", function () { playSample(link[2]); aufnahme[aufnahmeIndex] = link[5]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf7").addEventListener("click", function () { playSample(link[3]); aufnahme[aufnahmeIndex] = link[6]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf8").addEventListener("click", function () { playSample(link[7]); aufnahme[aufnahmeIndex] = link[7]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf9").addEventListener("click", function () { playSample(link[8]); aufnahme[aufnahmeIndex] = link[8]; aufnahmeIndex++; record(); });
    document.querySelector("#playbutton").addEventListener("click", function () { beatFunktion(); });
    document.querySelector("#deletebutton").addEventListener("click", function () { deleteBeat(); });
    document.querySelector("#remix").addEventListener("click", function () { remix(); });
    document.querySelector("#record").addEventListener("click", function () { recording(); recordIndex++; });
});
//# sourceMappingURL=script.js.map