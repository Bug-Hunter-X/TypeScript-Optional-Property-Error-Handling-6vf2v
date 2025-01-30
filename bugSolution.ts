function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}

let person1 = {firstName: 'John'};
printName(person1); // Output: John 

let person2 = {firstName: 'Jane', lastName: 'Doe'};
printName(person2); // Output: Jane Doe

let person3 = {firstName: 'Peter', middleName: 'Paul'};
printName(person3); // Output: Peter 