class Employee{
    constructor(name, position, salary){
        this.name = name;
        this.positon = position;
        this.salary = salary;
    }

    getSalarry(){
        return `${this.salary}`;
    }

}

let mysalary = new Employee ("Anjali", "engineer", "80000");

console.log(mysalary.getSalarry());