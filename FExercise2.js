class Product {
   constructor(name, price) {
     this.name = name;
     this.price = price;
   }
 }
 
 const product1 = new Product("Apple", 4000);
 const product2 = new Product("Orange", 2000);
 const product3 = new Product("Melon", 10000);
 const product4 = new Product("Banana", 20000);
 
 class Transaction {
   #total = 0;
   products = [];
 
   addToCart(item, qty) {
     item.qty = qty;
     this.products.push(item);
   }
 
   getTotal() {
     this.products.forEach((item) => {
       this.#total += item.price * item.qty;
       console.log(`${item.name} X ${item.qty} = ${item.price * item.qty}`);
     });
     console.log(`Total : ${this.#total}`);
   }
 
   checkout(money) {
     if (money < this.#total) {
       console.log("Uang tidak cukup");
     } else {
       console.log(`Cash : ${money}`);
       console.log(`Return : ${money - this.#total}`);
     }
   }
 }
 
 const transaction1 = new Transaction();
 transaction1.addToCart(product1, 3);
 transaction1.addToCart(product2, 1);
 transaction1.addToCart(product3, 6);
 console.log(transaction1);
 transaction1.getTotal();
 transaction1.checkout(100000);