/* 
    Завдання:
    Знайдіть на сторінці всі елементи li, які знаходяться в ul з класом border 
    і додайте для них суцільну червону рамку товщиною в 1px
    */
   let li = document.querySelectorAll('ul.border li')
   .forEach(u => u.style.border = '1px solid red')