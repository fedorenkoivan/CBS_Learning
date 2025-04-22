let productPrice1 = 101.5; // ціна 1го продукту
        let productPrice2 = 50.25; // ціна 2го продукту
        let productPrice3 = 10.11; // ціна 3го продукту

        let productQuantity1 = 5;  // кількість одиниць 1го продукта на складі
        let productQuantity2 = 9;  // кількість одиниць 2го продукта на складі
        let productQuantity3 = 15; // кількість одиниць 3го продукта на складі

        let averageSum = (productPrice1+productPrice2+productPrice3)/(productQuantity1+productQuantity2+productQuantity3)
        let totalSum = productPrice1*productQuantity1 + productPrice2*productQuantity2 + productPrice3*productQuantity3

        console.log(averageSum);
        console.log(totalSum);
        // Виведіт на екран:
        // 1) Середню ціну на продукт
        // 2) Загальну вартість всіх продуктів, які є складі