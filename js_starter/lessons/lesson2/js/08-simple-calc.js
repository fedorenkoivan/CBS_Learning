let a = +prompt("Введіть перше число", 0);
        let b = +prompt("Введіть друге число", 0);

        let sum = a + b;
        let substraction = a - b;
        let divide = a / b;
        let multiple = a * b;

        console.log("Строки, побудовані конкатенацією:")
        console.log(a + '+' + b + '=' + sum);
        console.log(a + '-' + b + '=' + substraction);
        console.log(a + '/' + b + '=' + divide);
        console.log(a + '*' + b + '=' + multiple);

        console.log("Строки, побудовані шаблонними рядками:");
        console.log(`${a} + ${b} = ${sum}`);;
        console.log(`${a} - ${b} = ${substraction}`);
        console.log(`${a} / ${b} = ${divide}`);
        console.log(`${a} * ${b} = ${multiple}`);