/**
 Passwortgenerator Aufgabe:
  - Erstelle einen String mit Zahlen, Groß- und Kleinbuchstaben und mit
    so vielen Sonderzeichen wie du willst. Speichere diesen String in
    einer Variablen namens "letters".
  - Erstelle eine Variable in der du die Länge deines Passworts
    einspeicherst und gib ihr den Namen "passwortLaenge".
  - Erstelle eine Variable namens "passwort" und gib ihr den Wert eines
    leeren Strings.
  - Nutze einen Loop, der solange läufte wie unsere Variable
    "passwortLaenge" es vorgibt, und die passenden Math Methodes um aus den
    vorgegeben "letters", Zeichen zu der Variablen "passwort" anzufügen.
  - Gib das generierte Passwort in der Konsole aus.

 */

const zahlen = "0123456789";
const grossBuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kleinBuchstaben = "abcdefghijklmnopqrstuvwxyz";
const sonderzeichen = "!§$%&()=?€{}|]><,.:;-_";

const letters = zahlen + grossBuchstaben + kleinBuchstaben + sonderzeichen;

const passwortLaenge = 8;
let passwort = "";

for (var i = 0; i < passwortLaenge; i++) {
  passwort += letters[Math.floor(Math.random() * letters.length)];
}

console.log(passwort);
