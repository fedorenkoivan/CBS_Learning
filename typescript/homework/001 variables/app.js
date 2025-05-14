"use strict";
// enum 1
var iceCream;
(function (iceCream) {
    iceCream[iceCream["\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"] = 15] = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439";
    iceCream[iceCream["\u0412\u0435\u043B\u0438\u043A\u0438\u0439"] = 25] = "\u0412\u0435\u043B\u0438\u043A\u0438\u0439";
})(iceCream || (iceCream = {}));
;
// enum 2
var ingredients;
(function (ingredients) {
    ingredients[ingredients["\u0428\u043E\u043A\u043E\u043B\u0430\u0434"] = 5] = "\u0428\u043E\u043A\u043E\u043B\u0430\u0434";
    ingredients[ingredients["\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C"] = 10] = "\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C";
    ingredients[ingredients["\u041C\u0430\u0440\u0448\u043C\u0435\u043B\u043B\u043E\u0443"] = 5] = "\u041C\u0430\u0440\u0448\u043C\u0435\u043B\u043B\u043E\u0443";
    ingredients[ingredients["\u042F\u0433\u043E\u0434\u0438"] = 15] = "\u042F\u0433\u043E\u0434\u0438";
})(ingredients || (ingredients = {}));
function ask() {
    let sum = 0;
    let message = '';
    let windowIceCream = prompt('Якого розміру морозиво ви б хотіли придбати у нашому магазині? \nМаленький - 10 грн \nВеликий - 25 грн \nВведіть замовлення українською мовою');
    let windowIngred = prompt('Чи хочете додати якісь інгредієнти? \n Шоколад: 5 грн \n Карамель: 10 грн \n Ягоди: 15 грн');
    if (typeof windowIceCream != 'string' || typeof windowIngred != 'string')
        return;
    sum = render(windowIceCream, windowIngred, sum);
    sum > 0 ? message = `Замовлення на суму ${sum} прийнято.` : message = 'Щось пішло не так. Спробуйте замовити ще раз.';
    alert(message);
}
function render(var1, var2, numb) {
    switch (var1) {
        case 'Великий':
            numb += iceCream.Великий;
            break;
        case 'Маленький':
            numb += iceCream.Маленький;
            break;
    }
    switch (var2) {
        case 'Шоколад':
            numb += ingredients.Шоколад;
            break;
        case 'Карамель':
            numb += ingredients.Карамель;
            break;
        case 'Маршмеллоу':
            numb += ingredients.Маршмеллоу;
            break;
        case 'Ягоди':
            numb += ingredients.Ягоди;
            break;
    }
    return numb;
}
ask();
