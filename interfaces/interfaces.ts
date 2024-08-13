interface Person {
    firstName: string;
    middleName?: string; // Optional properties
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    middleName: 'Albert', // Optional properties
    lastName: 'Doe'
};

console.log(getFullName(john));

