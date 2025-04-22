let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        let sum=0;
        for(let i=0; i<values.length; i++){
            let element = values[i]
            if(element>max){
                max = element;
            } else if(element<min){
                min = element
            }
            sum+=element
        }
        console.log(`Мінімальне значення масиву дорівнює ${min}.`)
        console.log(`Максимальне значення масиву дорівнює ${max}.`)
        console.log(`Сума всіх елементів масиву дорівнює ${sum}.`)