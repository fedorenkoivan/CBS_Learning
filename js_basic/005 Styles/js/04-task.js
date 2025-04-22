/*
        Завдання:
        Напишіть сценарія, який додасть клас attention рядкам таблиці, у яких в другій колонці знаходяться значення менше 100.
        */

        const table = document.getElementById('statsTable')
        const rowLength = table.rows.length
        const cellLength = table.rows[0].cells.length
        console.log(rowLength)
        console.dir(cellLength)
        for(let i = 0; i<cellLength; i++){
            for(let j = 0; j<rowLength; j++){
                const row = table.rows[j].cells[i]
                if(row.textContent < 100) {
                    row.parentElement.classList.add('attention')
                }
            }
            
        }