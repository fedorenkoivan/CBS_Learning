// інтерфейс описує сигнатуру функції, функція повинна приймати одне строкове значення і повертати boolean
interface Searchable {
    (value: string) : boolean;
}

let myArray1: Searchable = function (value: string) : boolean {
    return false;
}

// імена параметрів не обов'язково повинні співпадати з іменами в інтерфейсі
let myArray2: Searchable = function (data: string) : boolean {
    return false;
}