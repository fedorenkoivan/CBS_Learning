/*
        Завдання:
        Додайте зміни у сценарій.
        Додайте обробник на клік по кнопці reset. При кліці, значення, які ввели у поле вводу "Операнд 1"
        і "Операнд 2", повинні бути змінені на 0
        Додайте первірку перед виконанням будь якої арифметичної операції. Якщо поле пусте, додайте полю 
        червону рамку і зробіть елемент з помилкою видимим.
        Для input1 за відсутності значення має з'явитися span #input1Error, 
        для input2 зробіть, у випадку помилки, #input2Error помітним.
        */
        let input1 = document.querySelector("#input1");
        let input2 = document.querySelector("#input2");
        let inp1Error = document.querySelector('#input1Error')
        let inp2Error = document.querySelector('#input2Error')

        let addBtn = document.querySelector("#add-btn");
        let remBtn = document.querySelector("#rem-btn");
        let mulBtn = document.querySelector("#mul-btn");
        let divBtn = document.querySelector("#div-btn");
        let resetBtn = document.querySelector('#reset-btn')

        addBtn.addEventListener("click", function () {
            alert(Number(input1.value) + Number(input2.value));
        });

        remBtn.addEventListener("click", function () {
            alert(input1.value - input2.value);
        });

        mulBtn.addEventListener("click", function () {
            alert(input1.value * input2.value);
        });

        divBtn.addEventListener("click", function () {
            alert(input1.value / input2.value);
        });

        resetBtn.addEventListener('click', function() {
            input1.value = 0
            input2.value = 0
        })

        if(input1.value == "") {
            input1.style.border = '2px solid red'
            inp1Error.style.display = 'block'
        }

        if(input2.value == "") {
            input2.style.border = '2px solid red'
            inp2Error.style.display = 'block'
        }