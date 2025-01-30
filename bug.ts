function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

let person1 = {firstName: 'John'};
printName(person1); // This will work fine

let person2 = {firstName: 'Jane', lastName: 'Doe'};
printName(person2); // This will also work fine

let person3 = {firstName: 'Peter', middleName: 'Paul'};
printName(person3); // This will cause a compile-time error because person3 is missing the lastName property.