import Avatar from "./modules/avatar.js";
import Cowboy from "./modules/cowboy.js";
import Mago from "./modules/mago.js";

console.log(`============ AVATAR ============`)

const avatar = new Avatar(2, 35, 35, 0, 1);
console.log(avatar);

// Movimentação do avatar:
console.log(`Frente: ${avatar.forward()}`);
console.log(`Para trás: ${avatar.back()}`);
console.log(`Esquerda: ${avatar.left()}`);
console.log(`Direita: ${avatar.right()}`);
console.log(`Moedas adicionadas na bolsa: ${avatar.addCoinBag()}`);

// Informações do status do avatar:
console.log(`Total de vida: ${avatar.life()}`);
console.log(`Dano recebido: ${avatar.attack()}`);
console.log(`Poder de ataque: ${avatar.damage()}`);
console.log(`Restante de vida: ${avatar.receivedAttack()}`);

console.log(`============ COWBOY ============`)
const cowboy = new Cowboy(1, 8, 5);
console.log(cowboy);

// Movimentação do cowboy:
console.log(`Frente: ${cowboy.forward()}`);
console.log(`Para trás: ${cowboy.back()}`);
console.log(`Esquerda: ${cowboy.left()}`);
console.log(`Direita: ${cowboy.right()}`);
console.log(`Munição encontrada: ${avatar.addCoinBag()}`);

// Simulando 11 tiros do cowboy até a munição zerar:
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Dano do tiro: ${cowboy.attack()}`);
console.log(`Restante de vida: ${cowboy.receivedAttack()}`);

console.log(`============ MAGO ============`)
const mago = new Mago(9, 18, 25, 0, 0, 10);
console.log(mago);

// Movimentação do cowboy:
console.log(`Frente: ${mago.forward()}`);
console.log(`Para trás: ${mago.back()}`);
console.log(`Esquerda: ${mago.left()}`);
console.log(`Direita: ${mago.right()}`);
console.log(`Moedas adicionadas na bolsa: ${avatar.addCoinBag()}`);

// Simulando 11 ataques de feitiços até a mana zerar:
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Dano do feitiço: ${mago.attack()}`);
console.log(`Restante de vida: ${mago.receivedAttack()}`);

console.log(`Total de mana: ${mago.addMana()}`);