let country = prompt("Введіть назву країни");

        if(country==='USA' || country=="Great Britain"){
            alert("English language")
        } else if(country== "Germany"){
            alert("Deutche sprache")
        } else if(country=="France"){
            alert("Français")
        } else{
            alert("Мова не вказана( Спробуєте ще раз?")
        }

        // switch (country)
        // {
        //     case "USA":
        //     case "Great Britain":
        //         alert("Англійська");
        //         break;
        //     case "Germany":
        //         alert("Дойче");
        //         break;
        //     case "France":
        //         alert("Фганцузе?");
        //         break;

        //     default:
        //         alert("Переробюй");
        //         break;

        // }