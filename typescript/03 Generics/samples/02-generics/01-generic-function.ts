// generic или обобщенный тип - специальный тип данных, который позволяет создавать компоненты не привязываясь
// к конкретному типу данных, а указывать этот тип данных во время создания компонента.

// На строке 9 создана функция-generic эта функция принимает один параметр типа T и возвращает значение типа Т.
// T - type variable, специальный тип переменных, который используется в обобщенных типах для того чтобы хранить тип вместо значения.

// Type variable будет хранить тип данных, который предоставит пользователь функции в момент ее вызова.

function myFunc<T>(value: T): T {
    return value;
}

// функция myFunc принимает и возвращает строку. Тип данных указан явно в угловых скобках
let value1 = myFunc<string>("test");

// функция принимает и возвращает число. В данном случае используется type argument inference
// компилятор самостоятельно определят какой тип нужно использовать
let value2 = myFunc<number>(10);