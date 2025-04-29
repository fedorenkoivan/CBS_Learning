/*
        Завдання:
        Перепишіть клас Numbers, використовуючи шаблон "модуль".
        Поля values і threshold повинні бути закриті в модулі і зберігатися в замиканні.
        getGreaterThanThreshold і getLessThanThreshold повинні бути відкритими частинами модуля.

        На практиці, використання класів краще, за виключенням ситуацій,
        коли процес розробки і мета виконання не дають можливості використовувати 
        ключове слово class
        */
       let numbrs = (function () {
        let values, threshold;

        return {
            getGreaterThanThreshold: function() {
                return values.filter(v => v > threshold)
            },
            getLessThanThreshold: function () {
                return values.filter(v => v < threshold)
            },
            setArray: function(elements) {
                    values = elements
                },
            setTreeshold: function (number) {
                threshold = number
            }
        }
       } ())

        // class Numbers {
        //     #values;
        //     #threshold;

        //     constructor(threshold, values) {
        //         this.#values = values;
        //         this.#threshold = threshold;
        //     }

        //     // Повертає всі значення з масиву values, які більші за значення змінної threshold
        //     getGreaterThanThreshold() {
        //         return this.#values.filter(v => v > this.#threshold);
        //     }

        //     // повертає всі значення з масиву values, які менше за значення змінної threshold 
        //     getLessThanThreshold() {
        //         return this.#values.filter(v => v < this.#threshold);
        //     }
        // }

        // let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
        // let gt = numbers.getGreaterThanThreshold();
        // let lt = numbers.getLessThanThreshold();
        
        // console.log(gt);
        // console.log(lt);

        numbrs.setArray([2, 7, 50, 14, 0.2, 111])
        numbrs.setTreeshold(10)

        console.log(numbrs.getGreaterThanThreshold())
        console.log(numbrs.getLessThanThreshold())