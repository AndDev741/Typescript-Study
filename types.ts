//Basic Types
let age: number = 18;
let firstName: string = 'André Luiz';
let isValid: boolean = true;
let idk: any = 5;
idk = 'ok';

//Array
const ids: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['André', 'Felipe', 'Pedro'];

//Tuple
let person: [number, string];
person = [1, 'Harry Potter'];

//Array of tuples
const people: [number, string][] = [
    [1, 'Steve'],
    [2, 'Robert'],
    [3, 'Amelia']
]

//Intersections
let productId: string | number;
productId = 5;
productId = '89';

//Enum
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up; //Value = 1

//Type Assertions
const product: any = "Boné";
let productName = product as string;
let nameProduct = <string>product;