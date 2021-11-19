window.addEventListener("load", function(){
    /*Afrika*/
var a : number =  1325.5;
var afr : string = ("Africa")
var a_2008 : number = 1028;

/*Südamerika*/
var süd: string = ("South-America");
var b : number = 1261.5;
var b_2008 : number = 1132.6;

/*Europa*/
var eur : string = ("Europe")
var c : number = 4209.3;
var c_2008 : number = 4965.7;

/*Nordamerika*/
var na : string = "North-America"
var d : number = 6035.6;
var d_2008 : number = 6600.4;

/*Asien*/
var as : string = "Asia"
var e : number = 16274.1;
var e_2008 : number = 12954.7;

/*Australien*/
var au: string = ("Australia");
var f : number = 2100.5;
var f_2008 : number = 1993;

/*Gesamt*/
var G : number = a + b + c + d + e + f;

/*AfrikaRechnung*/
/*Relativ zu Gesamt*/
var AF : number = Math.round(100*((100/G)*a))/100;
/*Veränderung zu 2008*/
var AFV : number = Math.round(100*(((a/a_2008)*100)-100))/100
/*Differenz zu 2008*/
var AFD : number = Math.round(100*(a - a_2008))/100;

console.log('Die Emission von Afrika ist: '+ a + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Afrika: ' + AF + '%. ')
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + AFV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + AFD + 'kg CO2. ')

/*SüdamerikaRechnung*/
/*Relativ zu Gesamt*/
var S : number = Math.round(100*((100/G)*b))/100;
/*Veränderung zu 2008*/
var SV : number = Math.round(100*(((b/b_2008)*100)-100))/100
/*Differenz zu 2008*/
var SD : number = Math.round(100*(b - b_2008))/100;

console.log('Die Emission von Südamerika ist: '+ b + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Südamerika: ' + S + '%. ')
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + SV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + SD + 'kg CO2. ')


/*EuropaRechnung*/
/*Relativ zu Gesamt*/
var E : number = Math.round(100*((100/G)*c))/100;
/*Veränderung zu 2008*/
var EV : number = Math.round(100*(((c/c_2008)*100)-100))/100
/*Differenz zu 2008*/
var ED : number = Math.round(100*(c - c_2008))/100;

console.log('Die Emission von Europa ist: '+ c + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Europa: ' + E + '%. ')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + EV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + ED + 'kg CO2. ')

/*NordamerikaRechnung*/
/*Relativ zu Gesamt*/
var ND : number = Math.round(100*((100/G)*d))/100;
/*Veränderung zu 2008*/
var NDV : number = Math.round(100*(((d/d_2008)*100)-100))/100
/*Differenz zu 2008*/
var NDD : number = Math.round(100*(d - d_2008))/100;

console.log('Die Emission von Nordamerika ist: '+ d + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Nordamerika: ' + ND + '%. ')
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + NDV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + NDD + 'kg CO2. ')

/*AsienRechnung*/
/*Relativ zu Gesamt*/
var A : number = Math.round(100*((100/G)*e))/100;
/*Veränderung zu 2008*/
var AV : number = Math.round(100*(((e/e_2008)*100)-100))/100
/*Differenz zu 2008*/
var AD : number = Math.round(100*(e - e_2008))/100;

console.log('Die Emission von Asien ist: '+ e + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Asien: ' + A + '%. ')
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + AV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + AD + 'kg CO2. ')


/*Australien*/
/*Relativ zu Gesamt*/
var AU : number = Math.round(100*((100/G)*f))/100;
/*Veränderung zu 2008*/
var AUV : number = Math.round(100*(((f/f_2008)*100)-100))/100
/*Differenz zu 2008*/
var AUD : number = Math.round(100*(f - f_2008))/100;

console.log('Die Emission von Australien ist: '+ e + 'kg.CO2. Relativ zur Gesamtemssion der Welt verursacht Australien: ' + AU + '%. ')
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + AUV +'% verändert. ')
console.log('Im Vergleich zu 2008 sind das ' + AUD + 'kg CO2. ')


document.querySelector(".europe").addEventListener("click", function () { lander(eur, c_2008, E, EV, ED); });
document.querySelector(".northamerica").addEventListener("click", function () { lander(na, d_2008, ND, NDD, NDV); });
document.querySelector(".southamerica").addEventListener("click", function () { lander(süd, b_2008, S, SD, SV); });
document.querySelector(".africa").addEventListener("click", function () { lander(afr, a_2008, AF, AFD, AFV); });
document.querySelector(".asia").addEventListener("click", function () { lander(as, e_2008, A, AD, AV); });
document.querySelector(".australia").addEventListener("click", function () { lander(au, f_2008, AU, AUD, AUV); });
  

function lander(land, land18, landzuwelt, landzuland, landzulandco) {
document.querySelector(".emission").innerHTML = land18.toFixed(2);
document.querySelector(".relative").innerHTML = landzuwelt.toFixed(2) + "%";
document.querySelector(".growth").innerHTML = landzuland.toFixed(2) + "%";
document.querySelector(".growthrate").innerHTML = landzulandco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = land;
document.querySelector("#subtitleRegion").innerHTML = land;
document.querySelector(".chart").setAttribute("style", "height:" + (land18 / G) * 100 + "%");
}


})


