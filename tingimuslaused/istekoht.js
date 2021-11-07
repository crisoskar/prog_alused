let valik = prompt('kas soovite valida istekoha ise või loosida');
// valiku kontroll
if(valik === 'ise') {
    console.log('Valisite ise.')
    let koht = prompt('kas soovid istuda akna ääres või mujal?');
    if(koht === 'aken'){
        console.log('Aknakoht')
    } else {
        console.log('Muu koht')
    }
}
else {
    //loos
    console.log('Istekoht loositi.')
    let toenaosus = Math.trunc( Math.ceil(Math.random()*3 ))
    if(toenaosus === 1){
        console.log('Aknakoht');
    } else {
        console.log('Muu koht')
    }
}