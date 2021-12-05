window.addEventListener("load", function (): void {

    var link: string[] = ["A.mp3", "G.mp3", "F.mp3", "C.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "laugh-1.mp3", "laugh-2.mp3"];
    var reihenfolge: string[] = [link[5], link[6], link[5], link[4]];
    var poss: string[] = [link[5], link[4], link[6]];
    var aufnahme: string[] = [];

    var key: number = 0;
    var aufnahmeIndex: number = 0;
    var recordIndex: number = 0;

    var btn: HTMLElement = document.querySelector("#playbutton");
    var recorder: HTMLElement = document.querySelector("#record");
    var beat: HTMLAudioElement = new Audio(reihenfolge[key]);
    var max: number = poss.length - 1;
    var intervall: number = setInterval(rythmus, 200);

    function randomnum(max: number): number {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }

    function remix(): void {
        for (var i: number = 0; i <= poss.length; i++) {
            recorder.style.color = "white";
            reihenfolge[i] = poss[randomnum(max)];
        }
    }

    function deleteBeat(): void {
        reihenfolge.length = 0;
        aufnahmeIndex = 0;
    }

    function rythmus(): void {
        if (key >= reihenfolge.length) key = 0;
        if (btn.getAttribute("class") == "fas fa-stop") { beat = new Audio(reihenfolge[key]); playSample(reihenfolge[key]); key += 1; }
    }

    function beatFunktion(): void {
        if (btn.getAttribute("class") == "fas fa-stop") {
            btn.setAttribute("class", "fas fa-play");
            rythmus();
        }
        else {
            btn.setAttribute("class", "fas fa-stop");
            recorder.style.color = "white";
            if (btn.getAttribute("class") == "fas fa-play") { beat.pause(); }
        }
    }

    function record(): void {
        reihenfolge = aufnahme;
        recorder.style.color = "red";
    }

    function isEven(recordIndex: number): boolean {
        return recordIndex % 2 == 0;
    }

    function recording(): void {
        if (isEven(recordIndex) == true) { record(); }
        else { recorder.style.color = "white"; }
    }

    function playSample(tlink: string): void {
        var ton: HTMLAudioElement = new Audio(tlink);
        ton.play();
    }
          
    document.querySelector(".knopf1").addEventListener("click", function (): void { playSample(link[4]); aufnahme[aufnahmeIndex] = link[0]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf2").addEventListener("click", function (): void { playSample(link[5]); aufnahme[aufnahmeIndex] = link[1]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf3").addEventListener("click", function (): void { playSample(link[6]); aufnahme[aufnahmeIndex] = link[2]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf4").addEventListener("click", function (): void { playSample(link[0]); aufnahme[aufnahmeIndex] = link[3]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf5").addEventListener("click", function (): void { playSample(link[1]); aufnahme[aufnahmeIndex] = link[4]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf6").addEventListener("click", function (): void { playSample(link[2]); aufnahme[aufnahmeIndex] = link[5]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf7").addEventListener("click", function (): void { playSample(link[3]); aufnahme[aufnahmeIndex] = link[6]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf8").addEventListener("click", function (): void { playSample(link[7]); aufnahme[aufnahmeIndex] = link[7]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf9").addEventListener("click", function (): void { playSample(link[8]); aufnahme[aufnahmeIndex] = link[8]; aufnahmeIndex++; record(); });

    document.querySelector("#playbutton").addEventListener("click", function (): void { beatFunktion(); });
    document.querySelector("#deletebutton").addEventListener("click", function (): void { deleteBeat(); });
    document.querySelector("#remix").addEventListener("click", function (): void { remix(); });
    document.querySelector("#record").addEventListener("click", function (): void { recording(); recordIndex++; });

});
