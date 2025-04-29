/*
        Завданна:
        Перепишіть код нижче таким чином, щоб він працював у будь-якому середовищі виконання (браузер, node.js і т.п.)
        */
        // if (!window.calc) {
        //     window.calc = function (x, y) {
        //         alert(x + y);
        //     }
        // }

        // calc(10, 20);

        if(!globalThis.calc) {
            globalThis.calc = function (x, y) {
                alert(x + y)
            }
        }
        calc(5, 4)