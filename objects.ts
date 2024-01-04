// Type
type Order = {
    productName: string,
    price: number
}


type User = {
    firstName: string,
    age: number,
    email?: string, //? means that its optional
    password?: string,
    orders?: Order[]
};

const user: User = {
    firstName: "André Luiz",
    age: 18,
    email: 'email@gmail.com',
    password: '123456789',
    orders: [{productName: 'Pizza and Soda', price: 15}]
}

const showEmail = (yourEmail?: string) => {
    console.log(yourEmail);
}

showEmail(user.email);

//Unions
type Author = {
    books: string[];
}

const author: Author & User = {
    firstName: "John may",
    age: 78,
    email: 'email@gmail.com',
    password: '123456789',
    books: ['Fire and storm', 'Fire and water']
}

//Interfaces
interface UserInterface {
    readonly firstName: string, //can't be modified if assigned
    email: String
}

const userName: UserInterface = {
    firstName: 'I cant change my name',
    email: 'dsadsa@gmail.com'
}
