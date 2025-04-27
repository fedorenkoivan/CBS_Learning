// 13.08.22 20:21 - 21:23
        /*
        Завдання:
        Допишіть сценарій - при натисненні на кнопку Generate, з допомогою функції generateElement, повинні створюватися сотня елементів і розміщуватися в
        елементі interactivePanel. При повторному натисненні на кнопку, контент interactivePanel має видалитися, після цього створюється нова сотня елементів.
        Всі елементи з класом interactiveElement мають підтримувати перетягування мишкою, при кліку лівою клавішею миші елемент повинен переміщатися за курсором доти, 
        допоки клавіша не буде відпущена.
        */
        let move = false;
        let offsetX, offsetY, currentDiv;
        const generateBtnHeight = parseInt(getComputedStyle(generateButton).height)
        generateButton.addEventListener('click', () => {
            interactivePanel.textContent = ''
            for(let i = 0; i < 100; i++) {
                let div = generateElement();
                interactivePanel.append(div);
            }
        })
        interactivePanel.addEventListener('mousedown', (e) => {
            if(e.target.classList.contains('interactiveElement')) {
                    move = true;
                    offsetX = e.offsetX;
                    offsetY = e.offsetY;
                    currentDiv = e.target;
            }
                   
        })
        interactivePanel.addEventListener('mousemove', (e) => {
            if(e.which === 1 && move) {
                        currentDiv.style.top = e.clientY - offsetY - generateBtnHeight + 'px';
                        currentDiv.style.left = e.clientX - offsetX + 'px';
            }
        })
        interactivePanel.addEventListener('mouseup', () => move = false)

        // генерує та повертає дів (ще не намальований у документі)
        function generateElement() {
            let div = document.createElement('div');
            div.classList.add('interactiveElement');
            let maxLeft = window.innerWidth - 50; // щоб діви не з'явилися з правого боку (буде горизонтальний скрол, ганьба)
            let maxTop = window.innerHeight - 150; // діви не переходять межу у 150пікселів знизу, для вісутності вертикального скролу
            div.style.left = getRandomValue(maxLeft) + 'px';
            div.style.top = getRandomValue(maxTop) + 'px';
            div.style.background = getRandomColor();
            return div;
        }
        
        // повертає випадковий колір
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for(let i = 0; i < 6; i++) {
                color += letters[getRandomValue(16)];
            }
            return color;
        }

        // повертає випадкове число від нуля до макс 
        function getRandomValue(max) {
            return Math.floor(Math.random() * max)
        }