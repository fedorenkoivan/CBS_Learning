/* 
    Завдання:
    Для першого і останнього елемента li для всіх ul на даній сторінці
    додайте суцільну червону рамку товщиною в 1px
    */

    const ul = document.querySelectorAll('ul')
    .forEach(elem =>{
        const li = elem.querySelectorAll('li')
        li[0].style.border = '1px solid red'
        li[li.length-1].style.border = '1px solid red'
    })