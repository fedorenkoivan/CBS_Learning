/*
        Завдання:
        За прикладом з посиланнями size-16, size-24, size-32, які використовують замикання, додайте обробники
        на клік за посиланню red, green, blue. При кліці на посилання, колір параграфу повинен змінитися на відповідний до тексту посилання.
        Скористайтеся замикання на обробниках.
        */
        function makeSizer(size) {
            return function () {
                document.body.style.fontSize = size + 'px';
            };
        }

        let size16 = makeSizer(16);
        let size24 = makeSizer(24);
        let size32 = makeSizer(43);

        document.querySelector("#size-16").onclick = size16;
        document.querySelector("#size-24").onclick = size24;
        document.querySelector("#size-32").onclick = size32;

        function changeColor(color) {
            return function () {
                document.body.children[0].style.color = color
            }
        }

        const patient = document.body.children;
        const requirment = 'color'

        for(let i = 0; i < patient.length; i++) {
            const element = patient[i];
            if(element.id.includes(requirment)) {
                element.onclick = changeColor(element.textContent)
            }
        }