const sum = (x: number, y: number) => {
    return x + y;
}

const value = sum(1, 2);


const echo = (message: string): void => {
    console.log(message);
}
echo("Echo is the best");

interface MathFunc {
    (x: number, y: number): number;
}

const multiply: MathFunc = (x, y) => {
    return x * y;
}