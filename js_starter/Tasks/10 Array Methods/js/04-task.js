let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

        for(let s=0; s<values.length; ++s){
            let elem = values[s]
            if(elem<0){
                values.splice(s, 1)
            }
        }
        console.log(values)