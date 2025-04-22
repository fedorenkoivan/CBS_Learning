let productPrice = 101.5; // ціна товару
        let productQuantity = 50;  // кількість одиниць товару на складі

        let order = +prompt("Добрий день, введіть кількість товару, який ви бажаєте ");
        let sum = order * productPrice;
        let left = productQuantity-order;
        alert(`Ви замовили ${order} товарів. Отож з вас ${sum} гривні.`);
        alert(`На складі залишилося ${left} товарів. Можете продовжити покупки)`)