let product1 = "Папір офісний А4, 80 г/м2, 500 л";
        let product2 = "Біндери для паперу 51 мм";
        let product3 = "Ручка кулькова синя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Вкажіть кількість продуктів '${product1}', ціна ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Вкажіть кількість продуктів '${product2}', ціна ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Вкажіть кількість продуктів '${product3}', ціна ${productPrice3}`, 0);

        // Виведіть на екран скільки користувачу треба заплатити за кожен продукт окремо і скільки в сумі
        // використайте форматований вивід
        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2;
        let totalPriceProduct3 = productPrice3 * productQuantity3;

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Загальна сума товару '${product1}' складає ${totalPriceProduct1} гривень.`);
        console.log(`Загальна сума товару '${product2}' складає ${totalPriceProduct2} гривень.`);
        console.log(`Загальна сума товару '${product3}' складає ${totalPriceProduct3} гривень.`);
        console.log(`Всього з вас ${total} гривень.`);