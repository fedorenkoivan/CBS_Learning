/*
        Завдання:
        Створіть таблицю (table, tr, td) на основі значень масиву об'єктів source. Кожен об'єкт -  окремий рядок таблиці. Властивість month - значення для перших колонок.
        Властивість amonut - значення для другої колонки.
        */

        let source = [
            {
                month: "Січень",
                amount: 20
            },
            {
                month: "Лютий",
                amount: 140
            },
            {
                month: "Березень",
                amount: 115
            },
            {
                month: "Квітень",
                amount: 100
            },
            {
                month: "Травень",
                amount: 80
            },
            {
                month: "Червень",
                amount: 90
            },
            {
                month: "Липень",
                amount: 100
            }
        ];
        const body = document.querySelector('body')
        let table = document.createElement('table')
        source.forEach(row => {
            let tableRow = table.insertRow()
            let month = tableRow.insertCell()
            month.textContent = row.month
            let amount = tableRow.insertCell()
            amount.textContent = row.amount
    })
    body.append(table)