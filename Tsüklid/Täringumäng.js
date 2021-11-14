let täringud = prompt('Sisesta täringute arv:')

// for tsükkel
for (var i=1; i<=täringud; i++) {
    let täring = Math.floor(Math.random() * 6) +1
    console.log(täring)
}
