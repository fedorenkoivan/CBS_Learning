function asyncOperator(data) {
            return new Promise(function (res, rej) {
                let randomValue = Math.floor(Math.random() * 5001);

                setTimeout(() => {
                    if(randomValue > 1000) {
                        console.log(`дані ${data} оброблені за ${randomValue} секунд.`);
                        res(data + randomValue)
                    } 
                    
                    else { 
                        rej(new Error("помилка під час обробки даних"))
            }
        }, randomValue)
            });
        };
        
        let data = 10;

        document.querySelector('button').addEventListener('click', function () {
            asyncOperator(data)
                .then(data1 => asyncOperator(data1))
                .then(data2 => asyncOperator(data2))
                .then(data3 => asyncOperator(data3))
                .catch(e => console.log(e.message))
        });