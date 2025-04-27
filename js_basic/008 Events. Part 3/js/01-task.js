/*
        Завдання:
        Додайте для кнопки два обробники, один з яких повинен спрацювати у фазі capturing, другий - у фазі bubbling;
        */
        btn.addEventListener('click', () => alert('phase capture'), true);
        btn.addEventListener('click', () => alert('phase bubbling'));