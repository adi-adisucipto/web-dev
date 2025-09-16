interface Person {
    name: string;
}

class Employee implements Person {
    workingHour: number = 0;
    honor: number = 0;

    constructor(public name: string){}

    addWorkingHour(hour: number): void{
        this.workingHour = hour;
        if(this.workingHour <= 0){
            console.log("Jam kerja harus lebih dari 0")
        }
    }

    totalSalary(): void{
        if(this.workingHour <= 0){
            console.log(`Total honor: 0`)
        }
    }
}

class FullTimeEmployee extends Employee {
    addWorkingHour(hour: number): void {
        super.addWorkingHour(hour)
        if(hour > 0){
            console.log(`Jam kerja berhasil dimasukan`);
        }
    }

    totalSalary(): number {
        super.totalSalary();
        if(this.workingHour > 6){
            this.honor = 75000;
        } else {
            this.honor = 100000;
        }
        return this.honor * this.workingHour
    }
}

const employee1 = new FullTimeEmployee("Adi");
employee1.addWorkingHour(8);
const salary1 = employee1.totalSalary()
console.log(`Jumlah salary Full-Time: Rp${salary1.toLocaleString('id-ID')}`);

class PartTimeEmployee extends Employee{
    addWorkingHour(hour: number): void {
        super.addWorkingHour(hour);
        if(hour > 6){
            console.log("Jam kerja berhasil ditambahkan")
        }
    }

    totalSalary(): number {
        super.totalSalary();
        if(this.workingHour > 6){
            this.honor = 30000;
        } else {
            this.honor = 50000;
        }
        return this.workingHour * this.honor
    }
}

const employee2 = new PartTimeEmployee("Bela");
employee2.addWorkingHour(8);
const salary2 = employee2.totalSalary()
console.log(`Jumlah salary Part-Time: Rp${salary2.toLocaleString('id-ID')}`);