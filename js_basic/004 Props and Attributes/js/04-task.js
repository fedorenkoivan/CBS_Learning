/*
        Завдання:
        Для елементів з атрибутом data-status="expired" зробіть бордер червоного кольору. Для елементів з атрибутом data-status="completed" виведіть рамку зеленого кольору.
        */
       let divs = document.querySelectorAll('div')
       console.log(divs)
       divs.forEach(el => {
        if(el.dataset.status === 'expired') el.style.border = '2px solid red' 
        else if(el.dataset.status === 'completed') el.style.border = '2px solid green'
       })