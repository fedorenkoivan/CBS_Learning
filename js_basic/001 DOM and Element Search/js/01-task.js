/* 
    Завдання:
    Знайдіть на сторінці всі параграфи з класом border і додайте для них суцільну червону рамку товщиною в 1px
    */
   
        let paragraphs = document.querySelectorAll('p.border').forEach(e => e.style.border = '2px solid red')