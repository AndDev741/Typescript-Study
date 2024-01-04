//class
interface IPerson {
    id: number;

    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string; //Here and subclass
    private age: number; //Only here

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

class Employee extends Person{
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }

    whoAmI(){
        return this.name;
    }
}

const pessoa = new Person(1, 'André Luiz', 18);