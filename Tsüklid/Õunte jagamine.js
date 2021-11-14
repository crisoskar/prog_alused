let ppoiss = prompt('Mitu pöialpoissi tahab õunu?')

console.log("Mitu pöialpoisii tahtis õunu:" + ppoiss)
// for tsükkel
let õun_kokku = 14
for (let i = 1; i <= ppoiss; i++){
    let õunad = Math.floor(Math.random() * 2) +1
    õun_kokku = õun_kokku - õunad
    console.log(i + ". pöialpoiss sai " + õunad)

}
console.log("Lumivalgekesele jäi " + õun_kokku + " õuna")