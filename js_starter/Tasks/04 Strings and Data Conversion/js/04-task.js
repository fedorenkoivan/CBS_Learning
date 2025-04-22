let screenWidth = 1980; // ширина екрану
        let margins = 10; // відступи між блоками з описом товару
        let desieredBlockCount = 5; // кількість блоків з описом, які повинні відобразитися в один рядок

        let width = (screenWidth-4*margins)/5; // порахуйте ширину блоку і запишіть в цю змінну
        message = `Для того, щоб при ширині екрану ${screenWidth} пікселів з відступами у ${margins} пікселів наша кількість у ${desieredBlockCount} блоків відобразилася гарно, потрібно щоб кожен блок мав ширину ${width} пікселів.`
        console.log(message)