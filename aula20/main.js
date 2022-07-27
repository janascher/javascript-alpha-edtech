import ClassAvatar from "./modules/classes.js";
import FuncAvatar from "./modules/function.js";

// Classe
const avatar1 = new ClassAvatar(0, 0, 0);
console.log(avatar1)

console.log(`Frente: ${avatar1.forward()}`);
console.log(`Para trás: ${avatar1.back()}`);
console.log(`Esquerda: ${avatar1.left()}`);
console.log(`Direita: ${avatar1.right()}`);
console.log(`Adicionada moedas na bolsa: ${avatar1.addCoinBag()}`)

// Function
const avatar2 = new FuncAvatar(5, 10, 20);
console.log(avatar2.getAtributes())

console.log(`Frente: ${avatar2.forward()}`);
console.log(`Para trás: ${avatar2.back()}`);
console.log(`Esquerda: ${avatar2.left()}`);
console.log(`Direita: ${avatar2.right()}`);
console.log(`Adicionada moedas na bolsa: ${avatar2.addCoinBag()}`)