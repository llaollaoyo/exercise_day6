/*  ● Create a function to calculate array of student data
    ● The object has this following properties :
      ○ Name → String
      ○ Email → String
      ○ Age → Date
      ○ Score → Number
    ● Parameters : array of student
    ● Return values :
      ○ Object with this following properties :
        ■ Score
          ● Highest
          ● Lowest
          ● Average
        ■ Age
          ● Highest
          ● Lowest
          ● Average
 */

let student = [
  {
    name: "Via",
    email: "via@gmail.com",
    age: new Date("2000-06-04"),
    score: 86,
  },
  {
    name: "Adit",
    email: "adit@gmail.com",
    age: new Date("2000-06-04"),
    score: 90,
  },
  {
    name: "Llao",
    email: "llao@gmail.com",
    age: new Date("2001-06-04"),
    score: 84,
  },
];

function studentData(student) {
  let maxScore = student[0].score;
  let minScore = student[0].score;
  let sumScore = 0;
  let maxAge = calculateAge(student[0].age);
  let minAge = calculateAge(student[0].age);
  let sumAge = 0;

  for (let i = 0; i < student.length; i++) {
    if (student[i].score > maxScore) {
      maxScore = student[i].score;
    }
    if (student[i].score < minScore) {
      minScore = student[i].score;
    }
    sumScore += student[i].score;

    let studentAge = calculateAge(student[i].age);
    if (studentAge > maxAge) {
      maxAge = studentAge;
    }
    if (studentAge < minAge) {
      minAge = studentAge;
    }
    sumAge += studentAge;
  }

  let result = {
    score: {
      highest: maxScore,
      lowest: minScore,
      average: (sumScore / student.length).toFixed(2),
    },
    age: {
      highest: maxAge,
      lowest: minAge,
      average: Math.round(sumAge / student.length),
    },
  };

  return result;
}

// Membuat fungsi untuk menghitung umur
const calculateAge = function (birthDate) {
  const currentDate = new Date();
  const age = currentDate - birthDate;
  return Math.floor(age / (365 * 24 * 3600 * 1000));
};

console.log(studentData(student));

/*  ● Create a program to create transaction
    ● Product Class
      ○ Properties
        ■ Name
        ■ Price
    ● Transaction Class
      ○ Properties
        ■ Total
        ■ Product
          ● All product data
          ● Qty
      ○ Add to cart method → Add product to transaction
      ○ Show total method → Show total current transaction
      ○ Checkout method → Finalize transaction, return transaction data
*/

// Formatter untuk harga barang
let formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, qty = 1) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    console.log(`Total: ${formatter.format(this.total)}`);
  }

  checkOut() {
    console.log("Finalize Transaction...");
    for (let i = 0; i < this.products.length; i++) {
      console.log(
        `${this.products[i].product.name} x ${
          this.products[i].qty
        }: ${formatter.format(
          this.products[i].product.price * this.products[i].qty
        )}`
      );
    }
    this.showTotal();
    console.log("Transaction completed!");
  }
}

// Membuat beberapa jenis barang
let product1 = new Product("Baju", 200000);
let product2 = new Product("Celana", 300000);
let product3 = new Product("Sepatu", 500000);

// Membuat transaksi baru
let transaction = new Transaction();

// Menambah barang pada keranjang
transaction.addToCart(product1);
transaction.addToCart(product2, 2);
transaction.addToCart(product3);

// Menunjukan jumlah harga
transaction.showTotal();

// Checkout barang-barang pada keranjang
transaction.checkOut();
