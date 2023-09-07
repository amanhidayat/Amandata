console.log("Soal Nomor 2");
// Spesifikasi:
// ○ Buat game menembak antara dua pemain
// ○ Setiap pemain memiliki tiga properti: nama, kesehatan, dan kekuatan
// ○ Setiap pemain akan bergiliran menembak
// ○ Sebelum menembak, pemain mendapatkan kesempatan untuk mendapatkan item acak (kesehatan +10 atau kekuatan +10)
// ○ Permainan akan berlanjut sampai salah satu pemain memiliki < kesehatan 0
// Persyaratan: 
// ○ Buat kelas ShootingGame &; Player
// ○ Kelas ShootingGame: 
// ■ Konstruktor (Player1, Player2) → objek pemain sebagai parameter
// ■ getRandomItem() → mengembalikan {kesehatan: 0 atau 10, daya: 0 atau 10}
// ■ mulai () → mulai menembak game
// ○ Kelas pemain:
// Kelas pemain :
// ■ Nama → properti, kesehatan (default 100), daya (default 10)
// ■ hit (power) → mengurangi kesehatan pemain
// ■ useItem (item) → menerapkan item ke pemain (meningkatkan kesehatan atau kekuatan, berdasarkan hasil dari getRandomItem ())
// ■ showStatus() → menampilkan status pemain (mis: "Pemain A (Kesehatan => 100, Daya => 10)")
// Alur fungsi ShootingGame start():
// ■ Di setiap kesempatan:
// ● Tampilkan setiap status pemain sebelum menembak
// ● Dapatkan item acak untuk setiap pemain sebelum menembak
// ● Tampilkan setiap status pemain setelah pemotretan
// ■ Tampilkan nama pemenang

class Player {
    constructor(name) {
        this.name = name;
        this.kesehatan = 100; 
        this.kekuatan = 10;
    }

    showStatus() {
        console.log(`Player ${this.name} (kesehatan => ${this.kesehatan}, kekuatan => ${this.kekuatan})`);
    }

    hit(kekuatan) {
        this.kesehatan -= kekuatan;
        console.log(`Player ${this.name} has been damaged by ${kekuatan} points`);
        console.log(`Player ${this.name} has ${this.kesehatan} remaining health`);
    }

    useItem(item) {
        if (item.kesehatan) {
            this.kesehatan += item.kesehatan;
            console.log(`Player ${this.name} received ${item.kesehatan} kesehatan points`);
        }
        if (item.kekuatan) {
            this.kekuatan += item.kekuatan;
            console.log(`Player ${this.name} received ${item.kekuatan} kekuatan points`);
        }
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getItemAcak() {
        let item = {}
        let acak = Math.floor(Math.random() * 10); 

        if (acak === 0) {
            item.kesehatan = 10;
        } else if (acak === 1) {
            item.kekuatan = 10;
        }
        return item;
    }

    start() {
        console.log("==== GAME MULAI ====");
        while (this.player1.kesehatan > 1 && this.player2.kesehatan > 1) {
            console.log(`=== Player ${this.player1.name} turn ===`);
            this.player1.showStatus();
            this.player1.useItem(this.getItemAcak());
            this.player2.hit(this.player1.kekuatan);
            this.player2.showStatus();
            if (this.player2.kesehatan <= 0) {
                break;
            }

            console.log(` === Player ${this.player2.name} turn ===`);
            this.player2.showStatus();
            this.player2.useItem(this.getItemAcak());
            this.player1.hit(this.player2.kekuatan);
            this.player1.showStatus();
            if (this.player1.kesehatan <= 0) {
                break;
            }
        }
        if (this.player1.kesehatan <= 0) {
            console.log(`Pemenangnya adalah Player ${this.player2.name}`);
        } else {
            console.log(`Pemenangnya adalah Player ${this.player1.name}`);
        }
    }
}

const player1 = new Player("Aman");
const player2 = new Player("Yayat");

const shootingGame1 = new ShootingGame(player1, player2);
shootingGame1.start();

