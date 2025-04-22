let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
        let max = Number.MIN_VALUE;

        // for (let index = 0; index < values.length; index++) 
        // {
        //     const element = values[index];
        //     if(element > max)
        //     {
        //         max = element;
        //     }
        // }

        // console.log("Максимальное значение массива - " + max);
        
        for(let index of values){
            const element = values[index]
            if(element > max){
                max = element
            }
        }
        console.log('Максимальне значення масиву - ' + max)