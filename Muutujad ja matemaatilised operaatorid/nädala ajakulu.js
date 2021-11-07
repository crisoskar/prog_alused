var ainepunkti_arv = prompt("Sisesta ainepunktide arv") //Sisestab ainepunktide arvu
var nädalad_arv = prompt("Sisesta nädalate arv")// Sisestab nädalate arvu

var vastus = (ainepunkti_arv * 26) / nädalad_arv; //Arvutab mitu tundi on nädalas

console.log("Ajakulu "+ Math.trunc(vastus) + " tundi nädalas")// Ümardab saadud vastuse