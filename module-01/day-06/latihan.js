console.log("~~~~ Calculate array of student data ~~~~");
function getAge(lahir){
    const date = new Date();
    const tanggalLahir = new Date(lahir);
    let umur = (date - tanggalLahir) / (1000 * 24 * 60 * 60 * 365);
    return umur
}
function data(array){
    let score = [];
    let age = [];
    let sumAge = 0
    let sumScore = 0;
    student.map(item => {
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
const student = [
    {
        nama: "Dayyan Albern Lawani",
        email: "dayyan@gmail.com",
        age: getAge('2011-06-27'),
        score: 85
    },
    {
        nama: "Muhammad Ramadhan Putra",
        email: "ramadhan@gmail.com",
        age: getAge('2011-03-01'),
        score: 80
    },
    {
        nama: "Dewa Ayu Parassanti",
        email: "dewaayu@gmail.com",
        age: getAge('2012-02-13'),
        score: 88
    },
]
console.log(data(student));
console.log("~~~~ Selesai ~~~~");
console.log("");


