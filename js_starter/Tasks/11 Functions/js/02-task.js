function avg(a, b, c){
            if(a===undefined){
                console.log((b+c)/2);
            } else if(b===undefined){
                console.log((a+c)/2)
            } else if(c===undefined){
                console.log((a+b)/2)
            } else{
                console.log((a+b+c)/3)
            }
        }
        avg(5, 3, 2)
        avg(2, 2)