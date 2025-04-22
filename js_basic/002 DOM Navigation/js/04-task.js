/*
       Task:
Write a script that will change the color of table rows (tr) based on values in the second column of the #statsTable
If the value in the second cell is greater than 100, the row should be displayed in green; if the value is less than 100, in red color.
To change the row color, use the code row.style.backgroundColor = "color"
        */
       const table = document.querySelector('#statsTable')
       const output = table.querySelector('#output')
       const rowLength = table.rows[0].cells.length
       let sum = 0
       for(let row of table.rows){
            let lastCell = row.cells[rowLength-1]
            lastCell.textContent > 100? row.style.backgroundColor = 'green' :
            row.style.backgroundColor = 'red'
            sum += +lastCell.textContent
        }
        output.innerHTML = sum
       //output.textContent > 100 ? output.style.backgroundColor = "green" : output.style.backgroundColor = 'red'