alert("Рахуємо об'єм циліндру");
        //  V=π * r в квадраті * h
        let V;
        let r = +prompt("Введіть радіус циліндру");
        let h = +prompt("Введіть висоту циліндру");

        V = Math.floor(Math.PI * Math.pow(r, 2) * h)

        if(r<=0 || h<=0){
            console.log("Error. Your height or radius smaller than null.");
        } else if(isNaN(r) || isNaN(h)){
            console.log("Error. Your height or radius is'nt number.");
        } 
        //else можна просто пропустити
        alert(`Об'єм циліндру з висотою ${h} сантиметри і радіусом ${r} сантиметри = ${V} сантиметрів кубічних`);