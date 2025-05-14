// enum 1
enum iceCream {
    Маленький = 15,
    Великий = 25
};
// enum 2
enum ingredients  {
    Шоколад = 5,
    Карамель = 10,
    Маршмеллоу = 5,
    Ягоди = 15
}
function ask() : void {
    let sum: number = 0;
    let message: string = '';
    let windowIceCream = prompt('Якого розміру морозиво ви б хотіли придбати у нашому магазині? \nМаленький - 10 грн \nВеликий - 25 грн \nВведіть замовлення українською мовою');
    let windowIngred = prompt('Чи хочете додати якісь інгредієнти? \n Шоколад: 5 грн \n Карамель: 10 грн \n Ягоди: 15 грн');
    if(typeof windowIceCream != 'string' || typeof windowIngred != 'string') return;
    sum = render(windowIceCream, windowIngred, sum);
    sum > 0 ? message = `Замовлення на суму ${sum} прийнято.` : message = 'Щось пішло не так. Спробуйте замовити ще раз.';
    alert(message)
}

function render(var1:string, var2:string, numb:number) : number {
    switch(var1) {
        case 'Великий':
            numb += iceCream.Великий;
            break;
            case 'Маленький':
                numb += iceCream.Маленький;
                break;
    }
    switch(var2) {
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
ask()