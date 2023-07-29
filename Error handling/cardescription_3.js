class Car {
    constructor (company, model, year){
        this.year = year;
        this.company = company;
        this.model =  model; 
    }

    getDescription() {
        return`This is a ${this.year} ${this.company} ${this.model}`;

    }
}

let mycar = new Car ("Skoda", "Rapid", 2022);

console.log(mycar.getDescription());