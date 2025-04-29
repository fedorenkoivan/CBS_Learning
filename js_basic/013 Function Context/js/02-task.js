/*
        Завдання:
        Створіть функцію showWithDelay(масив);
        Метод приймає масив і виводить у консоль кожен елемент масиву з інтервалом у одну секунду
        Зробіть два варіанти з варианта с setInterval и setTimeout
        */
       function showWithDelayInterval () {
        let index = 0;
        let timer = setInterval(() => {
            console.log(array[index]);
            index++

            if(index === array.length) {
                clearInterval(timer);
            }
        },1000)
       };

       function showWithDelayTime (arr) {
        fn = index => {
            console.log(arr[index])
            index++

            if(index < arr.length)
                setTimeout(show, 1000, index)
        }
        fn(0)
       }

       let array = ['hello', 'bello', 42];
       
       showWithDelayInterval(array)
       showWithDelayTime(array)