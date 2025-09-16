interface Data {
    name: string
}

class Employee implements Data {
    workingHour: number = 0
    constructor(public name: string){}

    addWorkingHour(hour: number):void{
        if(hour > 0){
            this.workingHour += hour;
        }
    }
}

class FullTimeEmployee extends Employee {
    constructor(){
        super("Full-Time");
    }

    calculateTotalSalary(): number {
        let totalSalary = 0;
        if(this.workingHour > 6){
            totalSalary = this.workingHour * 75000;
        } else {
            totalSalary = this.workingHour * 100000;
        }
        return totalSalary;
    }
}

const employee1 = new FullTimeEmployee();
employee1.addWorkingHour(8)
employee1.calculateTotalSalary()

console.log(employee1.calculateTotalSalary())