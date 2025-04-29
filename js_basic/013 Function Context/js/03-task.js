/*
        Завдання:
        Знайдіть і виправте проблему в методах getGreaterThanThreshold і getLessThanThreshold
        */

        class Numbers {
            #values;
            #threshold;

            constructor(threshold, values) {
                this.#values = values;
                this.#threshold = threshold;
            }

            // Повертає всі значення з масива values, які більші, ніж значення зміноої threshold
            getGreaterThanThreshold() {
                return this.#values.filter(v => v > this.#threshold)
            }

            // Повертає всі змінні з масиву values, які менші, ніж значення змінної threshold 
            getLessThanThreshold() {
                return this.#values.filter(v => v < this.#threshold)
            }
        }

        let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
        let gt = numbers.getGreaterThanThreshold();
        let lt = numbers.getLessThanThreshold();

        console.log(gt);
        console.log(lt);