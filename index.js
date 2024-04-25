import { prompt } from "./prompt.js";

const targetNumber = Math.floor(Math.random() * 101);
// console.log(targetNumber);

let attempts = 0; //tentatives en anglais

let condition = true;

while (condition) {
  const choose = Number(prompt("\nChoisissez un nombre : "));
  //console.log(choose);

  if (isNaN(choose)) {
    console.log("Veuillez entrer un nombre correct\n");
  }

  if (choose > 100) {
    console.log("Veuillez choisir un nombre entre 0 et 100\n");
  }

  if (choose < 0) {
    console.log("Veuillez choisir un nombre entre 0 et 100\n");
  }

  if (choose > targetNumber && choose <= 100) {
    console.log("Trop grand\n");
  }

  if (choose < targetNumber && choose >= 0) {
    console.log("Trop petit\n");
  }

  attempts++;

  if (choose === targetNumber) {
    console.log(
      "Bravo ! fin de la partie, votre nombre d'essai est de " + attempts + "\n"
    );
    condition = false;
  }
}
