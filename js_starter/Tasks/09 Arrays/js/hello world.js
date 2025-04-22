for(let i=0; i<10; i++){
            console.log('hello world')
        }

        let values = [];
        for(let e=0; e<10; e++){
            let randomValue = Math.floor(Math.random() * 101)
            values[e] = randomValue;
        }
        for(let value of values){
            console.log(value)
        }