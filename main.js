const passwordBox = document.getElementById('password');
const passwordButton = document.getElementById('generate');

passwordButton.addEventListener('click', generatePassword);

const length = 12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+-=";

function generatePassword() {

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    const caracteres = upperCase + lowerCase + numbers + symbols;

    while (length > password.length) {
        password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    passwordBox.value = password;
}







