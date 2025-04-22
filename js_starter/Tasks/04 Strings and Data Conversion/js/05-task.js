let product1 = "Папір офісний А4, 80 г/м2, 500 л";
        let product2 = "Біндери для паперу 51 мм";
        let product3 = "Ручка кулькова синя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Введіть кількість товару '${product1}', ціна ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Введіть кількість товару '${product2}', ціна ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Введіть кількість товару '${product3}', ціна ${productPrice3}`, 0);
        
        // Виведіть на екран скільки користувачу потрібно заплатити за кожен продукт окремо і за всі продукти разом
        // використайте форматований вихід

        let product1Sum = productQuantity1 * productPrice1;
        let product2Sum = productQuantity2 * productPrice2;
        let product3Sum = productQuantity3 * productPrice3;

        let sum = `${product1Sum + product2Sum + product3Sum} гривень`;

        let message = `Привітик. Ти замовив ${product1} на ${product1Sum} гривень, ${product2} на ${product2Sum} гривень і ${product3} на ${product3Sum} гривень. Загалом це на ${sum}. Картка чи готівка? `
        alert(message)