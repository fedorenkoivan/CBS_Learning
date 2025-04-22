let sum=0;
        let input=0;
         while(input<10){
            input=prompt('Введіть значення більше десяти')
            sum+= +input
            if(input==null){
                break;
            }
        }
        console.log(`Сума ваших введень становить ${sum}.`)