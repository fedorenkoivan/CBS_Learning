let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28 ];

        const sum = values.reduce((acc, value) => acc + value, 0)
        const average = sum/values.length
        console.log('Average value of array is ' + average)
        values.forEach(item => item>average ? console.log(item) : 1)
        
        // let sum = 0;
        // let length = values.length
        // for(let i=0; i<values.length; i++){
        //     let elem = values[i]
        //     sum+=elem
        // }
        // for(let index of values){
        //     if(index>sum/length){
        //         console.log(`Це значення ${index} більше середнього арифметичного.`)
        //     }
        // }
        // console.log(`Середенє арифметичне масиву дорівнює ${sum/length}`)