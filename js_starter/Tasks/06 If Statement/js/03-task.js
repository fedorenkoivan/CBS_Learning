let message;
        let product1 = "Папір офісна А4, 80 г/м2, 500 л";
        let product2 = "Біндери для паперу 51 мм";
        let product3 = "Ручка кулькова синя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = prompt(`Вкажіть кількість товару '${product1}', ціна ${productPrice1}`, 0);
        let productQuantity2 = prompt(`Вкажіть кількість товару '${product2}', ціна ${productPrice2}`, 0);
        let productQuantity3 = prompt(`Вкажіть кількість товару '${product3}', ціна ${productPrice3}`, 0);
        let delivery = confirm("Чи бажає пан доставку?")
        // Виведіть на екран скільки користувачу треба заплатити за кожен продукт окремо і всього в сумі за всі продукти
        // використовуйте форматований вихід
        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2; 
        let totalPriceProduct3 = productPrice3 * productQuantity3; 

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        if(delivery){
            total+=40;
            message = 'Пан має доставку, але за неї доведеться заплатити 40 гривень. ';
        } else {
            message = 'Пан від доставки відмовився, тому тупай ніжками і забирай товар. ';
        }
        console.log(`Загальна сума продукту складає '${product1}' складає ${totalPriceProduct1} грн`);
        console.log(`Загальна сума продукту складає '${product2}' складає ${totalPriceProduct2} грн`);
        console.log(`Загальна сума продукту складає '${product3}' складає ${totalPriceProduct3} грн`);
        console.log(message + 'Отож термінал чекає на ' + total + 'грн.');