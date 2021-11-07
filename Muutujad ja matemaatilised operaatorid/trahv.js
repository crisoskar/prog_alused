var nimi = prompt("Palun sisesta oma nimi")

if (nimi != null) {
    lubatud_k = prompt("Palun sisesta lubatud kiirus")
    tegelik_k = prompt("Palun sisesta tegelik kiirus")
    trahv = (tegelik_k - lubatud_k) * 3;
    let trahvimäär = (trahv >= 190) ? "Max määr" : "Tavaline määr"
    vastus = (trahv >= 190) ? 190 : trahv
    console.log(nimi + " teie trahv on " + vastus + " eurot " + trahvimäär)
}