/*
        Завдання:
        Додайте на сторінку кнопку "Показати усе". При кліку по кнопці, на сторінці
        на сторінці повинна з'явитися таблиця з вмістом localStorrage. Перша колонка таблиці - ключ, друга - значення.
        
        Додайте на сторінку кнопку "Очистити localStorage". При натисненні на неї localStorage має очиститися.
        */
        document.forms.writeForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = document.forms.writeForm;

            let key = form.keyInput.value;
            let value = form.valueInput.value;

            localStorage.setItem(key, value); 
            form.reset();
        });

        document.forms.readForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const form = document.forms.readForm;
            let key = form.keyInput.value;

            let value = localStorage.getItem(key); 
            alert(value);
        });
        
        showBtn.addEventListener('click', () => {

            const form = document.forms.readForm;
            let table = document.createElement('table');

            for(let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                let cell = document.createElement('tr');
                cell.insertAdjacentHTML('beforeend', `<td>${key}</td>`);
                cell.insertAdjacentHTML('beforeend', `<td>${value}</td>`);
                table.append(cell)
            }
            form.append(table)
        })
        
        deleteBtn.addEventListener('click', () => {
            localStorage.clear()
            alert('localStorage успішно очищений')       
        })