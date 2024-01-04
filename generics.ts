const returnValue = <T>(value: T): T => value;

const message = <string>('Message');

const count = <number>(35);

function getFirstValueFromArray <T>(array: T[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);

const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2]);

