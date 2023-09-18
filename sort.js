/* Tulis kode untuk mengurutkan string menurut abjad (dengan dan tanpa fungsi sortir) */

/* menggunakan fungsi sortir */
const inputString = "hello";
const sortedString = inputString.split('').sort().join('');

console.log(sortedString);

/* tanpa fungsi sortir */
function sortStringAlphabetically(inputString2) {
    const characters = inputString2.split('');
    const length = characters.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (characters[j] > characters[j + 1]) {
                // Tukar karakter jika urutannya salah
                const temp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = temp;
            }
        }
    }

    return characters.join('');
}

const inputString2 = "hello";
const sortedString1 = sortStringAlphabetically(inputString);

console.log(sortedString1); // Output: "ehllo"
