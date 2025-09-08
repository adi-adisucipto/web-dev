const mouse = {
    // Properti object
    // brand, type, price adalah key
    // logitech, gx500, 25000 adalah value

    brand: "logitech",
    type: "gx500",
    price: 25000
}

console.log(mouse.price);
console.log(mouse.brand);
console.log(mouse["type"]);

// Update properti
mouse.price = 250000;

// Menambah properti
mouse.color = "red";

// Delete properti
delete mouse.color
console.log(mouse);


const person = {
    name: "Budi Doremi",
    email: "budi@gmail.com",
    phoneNumber: "088xxxxx",
    address: {
        address: "Jalan jalan-jalan No. 52",
        provinsi: "Konoha",
        // postal: {
        //     code: "35144",
        //     provinsi: "Konoha",
        //     kecamatan: "Iya"
        // }
    }
}

// person.address.postal?.city = {
//     city: "bandung"
// }
// console.log(person.address.postal?.city.city);

// Optional channing: kapan data wajib diisi atau tidak
console.log(person.address.postal?.kecamatan);


// Mutable dan Immutable
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];
arr.push(10);
console.log(newArr, arr);


// For in Loop
const keyboard = {
    brand: "logitech",
    type: "elite",
    price: 500000
}
for(const key in keyboard){
    console.log(keyboard[key])
}


// Destracturing
const laptop = {
    brand: "hp",
    type: "xtreme",
    cpu: "intel i7",
    ram: "32gb",
    gpu: "nvidia gtx 9999",
    color: "platinum",
    display: "ultra hd",
    resolution: "2k",
};

// Menggunakan alias dengan titik dua
const {
    brand: brands, type, cpu, ram, gpu, color, display, resolution
} = laptop;

console.log(brands);