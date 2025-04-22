/* 
    Завдання:
    getRandomColor це функція, яка повертає випадково згенерований колір в форматі #001122
    Використовуючи функцію getRandomColor додайте для кожного параграфа рамку випадкового кольору
    */
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let par = document.querySelectorAll('p')
    .forEach(e => e.style.border = '2px solid ' + getRandomColor())