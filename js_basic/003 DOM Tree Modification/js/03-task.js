/*
        Завдання:
        Напишіть сценарій, який видалить рядки таблиці, у яких значення другої колонки менше сотні.
        (В попередньому уроці були розглянуті приклади, які показували як можна достукатися до батьківського елементу ,
        оскільки видаляти треба не td, в якому знаходиться значення, а рядок tr, в якому розташований цей тд).
        */
    let scoreColumn = document.querySelectorAll('#statsTable td:nth-child(2)')

    for(let score of scoreColumn) {
        if(score.textContent < 100) {
            score.closest('tr').remove()
        }
    }