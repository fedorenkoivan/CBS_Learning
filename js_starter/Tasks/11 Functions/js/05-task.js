function values(array){
             let ar = []
             //let arr2 = []
             for(let value of array){
                 if(ar.findIndex(value)===-1){
                     ar.push(value)
                 } else{
                     console.log(null)
                 }
             }
                // array.forEach(e => {
                //     if(ar.indexOf(e)===-1){
                //         ar.push(e)
                //     } else{
                //         arr2.push(e)
                //     }
                // })
            return ar
            //видає два масиви, при чому в одному з  них значення, які потім повторюються в іншому
            //[1, 3, 2, 6, 7] i [3, 7, 7]
        }
        console.log(values([1, 3, 2, 6, 3, 7, 7, 7]))