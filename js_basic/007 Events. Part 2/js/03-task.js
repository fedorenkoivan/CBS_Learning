/*
        Завдання:
        Реалізуйте сценарій, який при натисненні на клавіші 1, 2 або 3 на клавіатурі буде додавати червону рамку
        на відповідний div. Якщо затисненні клавіші Ctrl + A, то червона рамка додається одразу
        для всіх div
        */
       
        const body = document.querySelector('body')
        let counter = 0;
        
        document.addEventListener('keydown', function(e) {
        if (e.key <= body.children.length) {
            body.children[e.key-1].style.border = '2px solid red'
        }
        
        if(e.ctrlKey && e.key == 'a') {
            ++counter
            if(counter % 2 != 0) {
                for(let child of body.children) 
                    child.style.border = '2px solid red' 
            } else {
                for(let child of body.children) 
                    child.style.border = 'none'
            }
        } 
       })