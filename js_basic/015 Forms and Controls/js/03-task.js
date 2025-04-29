/*
        Завдання:
        Змініть radio на select з варіантами валют -
        value - USD, текст для користувача - U.S. Dollar
        value - RUB, текст для користувача - Russian Ruble
        value - UAH, текст для користувача - Ukrainian Hryvnia
        value - EUR, текст для користувача - Euro
        value - PLN, текст для користувача - Polish Zloty
        value - CHF, текст для користувача - Swiss Franc
        
        Поведінка функції addRow не повинна змінитися
        */
        let productForm = document.forms.productForm;
        let productsTable = document.querySelector("#productsTable");
        let saveButton = document.querySelector("#saveButton");

        saveButton.addEventListener("click", function () {
            addRow(productForm.name.value,
                productForm.price.value,
                productForm.currency.value);

            for (let i = 0; i < productForm.elements.length; i++) {
                const element = productForm.elements[i];
                if (element.type == "text") element.value = "";
            }
        });

        function addRow(name, price, currency) {
            let tr = document.createElement("tr");
            tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${currency}</td>`);
            productsTable.append(tr);
        }