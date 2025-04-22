/*
        Завдання:
        Змініть сценарій таким чином, щоб крім зміни кольору div#color-sample в параграфі під div виводилося повідомлення 
        Колір: #000000
        Де #000000 значення кольору фону елемента div#color-sample
        */
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            par.innerHTML = color
            return color;
        }
        let par = document.querySelector('p')
        let colorSampleDiv = document.querySelector("#color-sample");
        colorSampleDiv.style.backgroundColor = getRandomColor();