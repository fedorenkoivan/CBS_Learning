let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

        let numbers = []
        values.forEach(h => {
            if(numbers.indexOf(h)===-1){
                numbers.push(h)
            } else{
                console.log(h)
            }
        })
        console.log(numbers)