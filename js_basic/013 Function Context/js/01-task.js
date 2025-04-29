/*
        Завдання:

        Допрацюйте сценарій. 
        - При натисненні на кнопку стоп, анімація повинна зупинитися.
        - При натисненні на кнопку прискорити, анімація повинна прискоритися, при повторних натисненнях 
          анімація повинна збільшуватися анимации
        - При натисненні на кнопку "Сповільнити" - анімація сповільнюється, при повторних натисненнях анімація стає
          повільнішою.
        */

        let element = document.querySelector("#element");
        let elementWidth = parseInt(getComputedStyle(element).width);
        let containerWidth = parseInt(getComputedStyle(document.querySelector("#container")).width);

        let direction = "right";
        let step = 3;
        let timer;
        function moveLeft() {
            element.style.left = getLeft(element) - step + "px";
        }

        function moveRight() {
            element.style.left = getLeft(element) + step + "px";
        }

        function getLeft(e) {
            return parseInt(getComputedStyle(e).left);
        }

        function move() {
            if (getLeft(element) >= containerWidth - elementWidth) {
                direction = "left";
            }
            if (getLeft(element) <= 0) {
                direction = "right";
            }

            if (direction == "right") {
                moveRight();
            }
            else {
                moveLeft();
            }
        }

        document.querySelector("#startBtn").addEventListener("click", function () {
            if(!timer) timer = setInterval(move, 40);
        });
        document.querySelector('#stopBtn').addEventListener('click', function () {
            if(timer) {
                clearInterval(timer);
                timer = false;
            }
        })
        document.querySelector('#increaseBtn').addEventListener('click', function () {
            if(timer) step += 2;
        })
        document.querySelector('#decreaseBtn').addEventListener('click', function () {
            if(timer) step -=2
        })
    //