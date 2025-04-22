let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];

        let pair = []
        let odd = []

        values
        .forEach(it => it%2 == 0 ? pair.push(it) : odd.push(it))
        console.log(pair)
        console.log(odd)

        // let pair = []
        // let odd = []
        // let pairPosition = 0;
        // let oddPosition = 0

        // for(let index=0; index < values.length; index++){
        //     const element = values[index]
        //     if(element%2==0){
        //         pair[pairPosition] = element
        //         pairPosition++
        //     } else{
        //         odd[oddPosition] = element
        //         oddPosition++
        //     }
        // }
        // console.log('Парні значення масиву:')
        // console.log(pair)
        // console.log('Непарні значення масиву:')
        // console.log(odd)