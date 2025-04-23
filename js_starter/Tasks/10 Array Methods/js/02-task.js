let array = [];
        while(true){
            let input = prompt("Введіть будь яке число. Щоб вийти з циклу, напишіть стоп латиною.")
            if(+input){
                array.push(input);
            } else if(input=='stop'){
                break;
            }
        }
        let sum=0;
        for(let value of array){
            sum+= Number(value)
        }
        console.log(`Сума числових введень складає ${sum}.`)