const heroi = "adamastor"
let xp = 0
let nivel =""

while(xp < 5001){
    xp++
}

if(xp >= 5001 && xp <= 7000){
    nivel = "ouro"   
}else if (xp >= 1001 && xp <= 2000){
    nivel = "bronze"
}else if(xp < 1000){
    nivel = "ferro"
}else if(xp > 2001 && xp <= 5001 ){
    nivel = "prata"
}else if(xp >= 7001 && xp <= 8000){
    nivel = "platina"
}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else if(xp >= 10001){
    nivel = "Radiante"
}

console.log("O Heroi de nome:"+(heroi)+" está no nivel:"+(nivel))
