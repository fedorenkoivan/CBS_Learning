let season = +prompt("Виберіть пору року");
        let result;

        switch(season){
            case 1:
                result="Зима. Скоро твій день народження!!"
                break;
            case 2:
                result="Весна. Пара місяців і ти на засмагаєш на морі"
                break;
            case 3:
                result="Літо..відпочинок відпочинком, але тобі не завадить повторити математику, скоро вступати:_)"
                break;
            case 4:
                result="Осінь. Збирайся в коледж чуваче)"
                break;
            default:
                result="Уважнішеее"
                break;
        }
        alert(result)