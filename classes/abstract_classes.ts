abstract class Collaborator {
    constructor(private firstName: string, private lastName: string) { }
    abstract getSalary(): number;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Collaborator {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Collaborator {
    constructor(
        firstName: string,
        lastName: string,
        private rate: number,
        private hours: number
    ) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let peter = new FullTimeEmployee('Peter', 'Doe', 12000);
let mary = new Contractor('Mary', 'Doe', 100, 160);

console.log(peter.compensationStatement());
console.log(mary.compensationStatement());