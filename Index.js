// Altere os dados do heroi para saber qual seu nivel
let nomeHeroi = "LoKura";
let xp = 8500;

let nivelHeroi;

if (xp >= 0 && xp < 1000) {
  nivelHeroi = "Ferro";
} else if (xp > 1000 && xp < 2000) {
  nivelHeroi = "Bronze";
} else if (xp >= 2000 && xp < 5000) {
  nivelHeroi = "Prata";
} else if (xp >= 5000 && xp < 7000) {
  nivelHeroi = "Ouro";
} else if (xp >= 7000 && xp < 8000) {
  nivelHeroi = "Platina";
} else if (xp >= 8000 && xp < 9000) {
  nivelHeroi = "Ascendente";
} else if (xp >= 9000 && xp <= 10000) {
  nivelHeroi = "Imortal";
} else if (xp > 10000) {
  nivelHeroi = "Radiante";
}

console.log(`O herói: ${nomeHeroi} está no nível de ${nivelHeroi}`);
