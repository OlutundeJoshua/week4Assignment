//Person Object
class Person {
    constructor(name, age, sex, height) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.height = height;
    }

    details() {
        return `My name is ${this.name}, i am ${this.age} years old and ${this.height} tall.`;
    }

    walk() {
        return `${this.name} is walking.`
    }

    run() {
       return `${this.name} is running!`
    }
}

//School object
class School extends Person {
    constructor(name, age, sex, height) {
        //inheritance
        super(name, age, sex, height);
    }

    schoolName = 'Abbot Dayspring College';
    address = 'Ipaja Lagos';

    schoolInfo() {
        return `This is ${this.schoolName}, it is located at ${this.address}.`;
    }

    studentDetails() {
        return this.details();
    }
}

//instantiating the school object
const school = new School ('Gbenga', '19', 'Male', '5 feet')

//Test
console.log(school.schoolInfo());
console.log(school.studentDetails())
console.log(school.run())