import { prompt } from "./prompt.js";

const targetNumber = Math.floor(Math.random() * 101);
// console.log(targetNumber);

let attempts = 0; //tentatives en anglais

let condition = true;

while (condition) {
  const choose = Number(prompt("Choisissez un nombre : "));
  console.log(choose);

  if (isNaN(choose)) {
    console.log("Veuillez entrer un nombre correct : ");
  }

  if (choose > 100) {
    console.log("Veuillez choisir un nombre entre 0 et 100");
  }

  if (choose < 0) {
    console.log("Veuillez choisir un nombre entre 0 et 100");
  }

  if (choose > targetNumber) {
    console.log("Trop grand");
  }

  if (choose < targetNumber) {
    console.log("Trop petit");
  }

  attempts++;

  if (choose === targetNumber) {
    console.log(
      "Bravo ! fin de la partie, votre nombre d'essai est de " + attempts
    );
    condition = false;
  }
}
