/*
        Завдання:
        Порахуйте суму значень атрибутів data-value і my-attribute всіх елементів на сторінці і відобразіть її користувачу.
        */
      let div = document.querySelectorAll('[data-value]')
      let myAttr = document.querySelectorAll('[my-attribute]')
      let body = document.querySelector('body')
      let sum = 0;
      div.forEach(el => {
        sum += +el.dataset.value
       })
       myAttr.forEach(el => {
        sum += +el.getAttribute('my-attribute')
       })
      
       //body.append(document.createElement('div').innerHTML = 'Сума атрибутів: ' + sum)
      body.insertAdjacentHTML('beforeend', `<p>Сума атрибутів складає ${sum}</p>`)