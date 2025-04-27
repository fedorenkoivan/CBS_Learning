/*
        Завдання:
        Напишіть сценарій, який рахує об'єм циліндру по параметрам, які вводить користувач.
        Для підрахунків використовуйте формулу - V=π * r в квадраті * h
        Розмістіть на сторінці два інпути - перший для радіусу, другий для висоти циліндру.
        Об'єм циліндру виведіть в тіло сторінки.
        */
       const body = document.querySelector('body')
        const radius = document.querySelector('#radius') 
        const height = document.querySelector('#height')
        const compare = document.querySelector('button')
            
        compare.addEventListener('click', function() {
            const v = Math.PI * Math.pow(+radius.value, 2) * Number(height.value)
            body.insertAdjacentHTML('beforeend', `<div>Площа дорівнює ${v}</div>`)
        })