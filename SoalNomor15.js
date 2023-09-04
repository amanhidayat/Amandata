function myFunc(player) {
    let numRandom = Math.ceil(Math.random() * 3);
    let com = numRandom === 1 ? "rock" : numRandom === 2 ? "paper" : "scissor";
    let res = "";

    if (player === "rock" && com === "paper") {
        res = "Lose";
    } else if (player === "paper" && com === "scissor") {
        res = "Lose";
    } else if (player === "scissor" && com === "rock") {
        res = "Lose";
    } else if (player === com) {
        res = "Draw";
    }

    return res;
}

// Contoh penggunaan:
let playerChoice = "rock"; // Ganti dengan pilihan pemain yang Anda inginkan
console.log(myFunc(playerChoice));
