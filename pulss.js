let age = prompt("Sisesta oma vanus")
let sugu = prompt("Sisesta oma sugu (M või m) või (N või n): ")
let trenn = prompt("Sisesta treeningutüüp (1, 2 või 3):")

//tingimuslause
//sugu kontroll

//max pulsi arvutamine
let maxPulseSagedus;
if (sugu === "M"||sugu ==="m"){
    maxPulseSagedus = 220 - age;
} if (sugu === "N"|| sugu ==="n") {
    maxPulseSagedus = 206 - age * 0.88;
}

//treeningukontroll
let maxpulse;
let minpulse;
if (trenn == 1) {
    minpulse = maxPulseSagedus * 0.5;
    maxpulse = maxPulseSagedus * 0.7;
} else if (trenn == 2){
    minpulse =maxPulseSagedus * 0.7;
    maxpulse = maxPulseSagedus * 0.8;
} else if (trenn == 3){
    minpulse = maxPulseSagedus * 0.8;
    maxpulse = maxPulseSagedus * 0.87;
}
console.log('Pulsisagedus peaks olema vahemikus ' + Math.trunc(Math.round(minpulse))  + ' ja ' + Math.trunc(Math.round(maxpulse)))