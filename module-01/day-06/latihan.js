console.log("~~~~ Calculate array of student data ~~~~");

// Fungsi untuk usia
function getAge(lahir){
    const date = new Date();
    const tanggalLahir = new Date(lahir);
    let umur = (date - tanggalLahir) / (1000 * 24 * 60 * 60 * 365);
    return umur
}

// Fungsi utama
function data(array){
    let score = [];
    let age = [];
    let sumAge = 0
    let sumScore = 0;
    array.map(item => {
        score.push(item.score);
        age.push(item.age)
        sumScore += item.score
        sumAge += item.age
    });
    let sortScore = score.sort((a, b) => a - b);
    let sortAge = age.sort((a, b) => a - b );
    return {
        score: {
            highest: sortScore[array.length - 1],
            lowest: sortScore[0],
            average: (sumScore / array.length).toFixed(3)
        },
        Age: {
            highest: Math.floor(sortAge[array.length - 1]),
            lowest: Math.floor(sortAge[0]),
            average: (sumAge / array.length).toFixed(3)
        }
    }
}

class Student {
    name;
    email;
    age;
    score;

    constructor(name, email, age, score){
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
}

const student1 = new Student(
    "Dayyan Albern Lawani",
    "dayyan@gmail.com",
    getAge('2011-06-27'),
    85
)

const student2 = new Student(
    "Muhammad Ramadhan Putra",
    "ramadhan@gmail.com",
    getAge('2011-03-01'),
    80
)

const student3 = new Student(
    "Dewa Ayu Parassanti",
    "dewaayu@gmail.com",
    getAge('2012-02-13'),
    88
)

const student = [student1, student2, student3];
console.log(data(student));
console.log("~~~~ Selesai ~~~~");
console.log("");





console.log("~~~~ Create Transaction ~~~~");
class Product {
    name;
    price;

    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor(){
        this.product = [];
        this.total = 0;
    }

    addCart(product, qty){
        this.product.push({
            name: product.name,
            price: product.price,
            qty: qty
        })
    }

    showTransaction(){
        this.product.map(item => {
            this.total += item.price * item.qty
        })
    }

    checkOut(boolean){
        if(boolean){
            console.log("Transaksi selesai")
        } else {
            console.log("Transaksi gagal")
        }
    }
}

const baju = new Product("baju", 25000);
const celana = new Product("celana", 100000);

const myTransaction = new Transaction();

myTransaction.addCart(baju, 3);
myTransaction.addCart(celana, 2);
myTransaction.showTransaction();
console.log(myTransaction);
myTransaction.checkOut(true);