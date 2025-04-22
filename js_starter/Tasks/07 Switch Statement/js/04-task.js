let product1 = "Папір офісна А4, 80 г/м2, 500 л";
        let product2 = "Біндери для паперу 51 мм";
        let product3 = "Ручка кулькова синя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Вкажіть кількість продуктів '${product1}', ціна ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Вкажіть кількість продуктів '${product2}', ціна ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Вкажіть кількість продуктів '${product3}', ціна ${productPrice3}`, 0);

        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2;
        let totalPriceProduct3 = productPrice3 * productQuantity3;

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Загальна сума товару '${product1}' складає ${totalPriceProduct1} грн.`);
        console.log(`Загальна сума товару '${product2}' складає ${totalPriceProduct2} грн.`);
        console.log(`Загальна сума товару '${product3}' складає ${totalPriceProduct3} грн.`);

        let shipping = confirm("Замовляєте доставку кур'єром?");
        
        
        let discount;
        if(total>=500 && total<1000){
            discount=0.05*total; //560*0.05=25(два папери)
            total-=discount //560-25
            console.log(`Ви замовили на ${total} грн, завдяки знижці зекономивши ${discount} грн.`);
        } else if(total>=1000 && total<1500){
            discount=0.1*total;
            total-=discount;
            console.log(`Ви замовили на ${total} грн, завдяки знижці зекономивши ${discount} грн.`);
        } else if(total>=1500){
            discount=0.15*total;
            total-=discount;
            shipping=false;
            console.log(`Замовлення на ${total} грн, завдяки знижці ви зекомили ${discount} грн.`);
        } 

        // if (shipping){
        //     total += 40;
        //     console.log("Доставка 40 гривень.");
        // } else if(shipping='no' && total>=1500){
        //     console.log('Безкоштовна доставка:_)');
        // }

        if(shipping){
            total+=40;
            console.log("Доставка 40 гривень");
        } 

        console.log("Всього " + total + " грн.");