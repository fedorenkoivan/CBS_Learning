let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

        let min = Number.MAX_VALUE
        let max = Number.MIN_VALUE
        let posTheSmallNum = 0;
        let posTheBiggNum = 0
        values
        .forEach(element => {
            if(element<min){
                min = element
                posTheSmallNum = values.indexOf(element)
        } else if(element>max){
            max = element
            posTheBiggNum = values.indexOf(element)
        }
        })
        console.log('then:')
        console.log(values)
        
        values[posTheSmallNum] = max
        values[posTheBiggNum] = min
        console.log('now');
        console.log(values);













        // let posTheBiggNumb = 0;
        // let posTheSmallNumb = 0;
        // let min = Number.MAX_VALUE;
        // let max = Number.MIN_VALUE;
        // for(let e=0; e<values.length; e++){
        //     if(values[e]>max){
        //         max=values[e]
        //         posTheBiggNumb=e
        //     } else if (values[e]<min){
        //         min=values[e]
        //         posTheSmallNumb=e
        //     }
        // }

        // console.log('then')
        // console.log(values)
        // values[posTheBiggNumb] = min
        // values[posTheSmallNumb] = max
        // console.log('now')
        // console.log(values)