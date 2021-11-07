let täringud = prompt('Sisesta täringute arv:')

// for tsükkel
for (let täring = 1; täring <= täringud; täring++){
    console.log(Math.trunc(Math.round(Math.random()*6)) ) + "<br>"
}

console.log('Täringute arv: '+ täringud)