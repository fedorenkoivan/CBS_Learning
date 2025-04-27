/*
        Завдання:
        Внесіть зміни в сценарій. Зробіть так, щоб при натисненні на клавішу Shift і натиснутим стрілкам на клавіатурі, 
        елемент бігав по сторінці вдвічі швидше, ніж за допомогою просто стрілок.
        */
        let div = document.querySelector("#element");
        let distance = 10;

        document.addEventListener("keydown", function (e) {
            let speed = distance;
            if(e.shiftKey) speed *=2
            switch (e.code) {
                case "ArrowLeft":
                    moveLeft(div, speed);
                    break;
                case "ArrowRight":
                    moveRight(div, speed);
                    break;
                case "ArrowUp":
                    moveUp(div, speed);
                    break;
                case "ArrowDown":
                    moveDown(div, speed);
                    break;
            }
        });

        function moveUp(element, distance) {
            let top = getComputedStyle(element).top;
            element.style.top = parseInt(top) - distance + "px";
        }

        function moveDown(element, distance) {
            let top = getComputedStyle(element).top;
            element.style.top = parseInt(top) + distance + "px";
        }

        function moveLeft(element, distance) {
            let left = getComputedStyle(element).left;
            element.style.left = parseInt(left) - distance + "px";
        }

        function moveRight(element, distance) {
            let left = getComputedStyle(element).left;
            element.style.left = parseInt(left) + distance + "px";
        }