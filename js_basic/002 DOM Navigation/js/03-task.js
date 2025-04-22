/*
        Завдання:
        Додайте рядок "Всього" для таблиці statsTable. Напишіть сценарій, який виведе в другу клітинку цього рядка суму всіх числових значень другої колонки.
        Виведіть в третю клітинку цього рядка суму всіх чисел з третьої колонки таблиці.
        В div с id result выведите сообщение "Отдел 1 сделал больше продаж" или "Отдел 2 сделал больше продаж" на основе раннее вычисленных значений в строке "Итого".
        Используйте любые методы, которые были рассмотрены на в прошлых уроках.
        */
        let table = document.querySelector('#statsTable')
        let output = table.querySelector('#output')
        let result = document.querySelector('#result')
        let rowLength = table.rows.length; // кількість колонок в таблиці
        let cellLength = table.rows[0].cells.length
        let sum = 0;
        let max = 0
        for(let i = 1; i < cellLength; i++){
            for(let j = 1; j < rowLength-1; j++){
                sum += +table.rows[j].cells[i].innerText
            }
            output.insertAdjacentHTML('beforeend', `<th>${sum}</th>`)
            if(sum > max) {
                max = sum
                console.log(table.rows[0].cells[i])
            }
            sum = 0
        }
        // for(const child of output.children) {
        //     let elem = child.textContent
        //     if(elem>max){
        //         max = elem
        //     }        
        // }
            result.innerHTML = max