let ordersCount = 0;
        let product1 = "Папір офісний А4, 80 г/м2, 500 л";
        let product2 = "Біндери для паперу 51 мм";
        let product3 = "Ручка кулькова синя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Вкажіть кількість продукту '${product1}', ціна ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Вкажіть кількість продукту '${product2}', ціна ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Вкажіть кількість продукту '${product3}', ціна ${productPrice3}`, 0);

        let totalPrice = 0;

        totalPrice = totalPrice + productPrice1 * productQuantity1;
        totalPrice = totalPrice + productPrice2 * productQuantity2;
        totalPrice = totalPrice + productPrice3 * productQuantity3;
        ordersCount++;

        alert(`Загальна сума ${totalPrice} гривень`);