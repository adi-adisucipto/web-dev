const angkaHari = 10;
let namaHari;

// digunakan biasanya untuk tipe data string saja

switch(angkaHari) {
    case 0:
        namaHari = "Minggu";
        break;
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jum'at";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    default:
        namaHari = "Angka yang dimasukkan tidak valid";
}

console.log(namaHari)