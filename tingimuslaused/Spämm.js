//Kasutaja sisend
var kSuurus = prompt('Sisesta kirja suurus')
var kPealkiri = prompt('Sisesta kirja teema pealkiri')
var kFail = prompt('Kas kirjaga on kaasas fail?')
//kirja suurus
if (kSuurus <= 1) {
    if(kPealkiri === 'Ülesanne'&& kFail === 'jah') { //Kui kirjal on pealkiri ja fail ei ole kiri spämm
        console.log('Kiri ei ole spämm')
    } else {
        console.log('Kiri on spämm') //Kui pole kumbagi on kiri spämm
    }
} else {
    console.log('Kiri ei ole spämm') //Kui kiri ületab 1MB ei ole kiri spämm
}