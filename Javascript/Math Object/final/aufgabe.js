/**
 *
 * ### Aufgaben ###
 *
 * 1. Nutze die richtige Math Methode um drei
 * Zufallszahlen zu generieren, welche zwischen
 * 1-10 liegen. Speichere diese in Variablen mit
 * folgenden Namen: num1, num2, num 3. Gib diese
 * Variablen in der Konsole aus.
 *
 * 2. Finde mit einer geeigneten Math Methode
 * heraus, welche der drei Zahlen, die größte
 * ist, speichere diese in einer Variable Namens
 * "max" und gib diese in der Konsole aus.
 *
 * 3. Schreibe eine Funktion namens "getRandomInt",
 * welche zwei Paramenter namenes "min" und "max"
 * entgegen nimmt und  eine ganze Zufallszahl
 * zwischen zwei Zahlen zurück gibt.
 *
 */


// Aufgabe 1
const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);
const num3 = Math.ceil(Math.random() * 100);

//ODER
// const num1 = Math.floor(Math.random() * 100 + 1);
// const num2 = Math.floor(Math.random() * 100 + 1);
// const num3 = Math.floor(Math.random() * 100 + 1);

console.log(num1, num2, num3);

// Aufgabe 2
const max = Math.max(num1, num2, num3);

console.log(max);

// Aufgabe 3
Methode getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 3));
