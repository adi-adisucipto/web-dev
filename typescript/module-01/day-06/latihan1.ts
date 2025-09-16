interface Student {
    Name: string;
    Email: string;
    Age: Date;
    Score: number;
}

const studentData: Student[] = [
    { Name: "Budi", Email: "budi@mail.com", Age: new Date("2000-01-01"), Score: 85 },
    { Name: "Ani", Email: "ani@mail.com", Age: new Date("1999-05-15"), Score: 92 },
    { Name: "Joko", Email: "joko@mail.com", Age: new Date("2001-10-20"), Score: 78 },
    { Name: "Siti", Email: "siti@mail.com", Age: new Date("2000-03-25"), Score: 95 },
]

interface Result {
    Score: {
        Highest: number;
        Lowest: number;
        Average: number;
    };
    Age: {
        Highest: number;
        Lowest: number;
        Average: number;
    };
}

function CalculateStudentData(students:Student[]): Result {
    if(students.length === 0){
        return {
            Score: {Highest: 0, Lowest: 0, Average: 0},
            Age: { Highest: 0, Lowest: 0, Average: 0 }
        }
    }

    let high: number = students[0].Score;
    let low: number = students[0].Score;
    let day: Date = new Date()
    let highAge: number = students[0].Age.getFullYear();
    let lowAge: number = students[0].Age.getFullYear();
    let sum: number = 0;
    let sumAge: number = 0;
    for(let i: number = 0; i < students.length; i++){
        if(high < students[i].Score){
            high = students[i].Score;
        }
        if(low > students[i].Score){
            low = students[i].Score;
        }
        sum += students[i].Score;

        if(highAge > students[i].Age.getFullYear()){
            highAge = day.getFullYear() - students[i].Age.getFullYear();
        }
        if(highAge < students[i].Age.getFullYear()){
            lowAge = day.getFullYear() - students[i].Age.getFullYear();
        }
        sumAge += (day.getFullYear() - students[i].Age.getFullYear())
    }

    return {
            Score: {Highest: high, Lowest: low, Average: sum / students.length},
            Age: { Highest: highAge, Lowest: lowAge, Average: sumAge / students.length }
        }
}

console.log(CalculateStudentData(studentData))