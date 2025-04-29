/*
        Завдання:
        Додайте у форму поле вводу "кількість на складі". Зробіть так, щоб при натисненні на кнопку "Зберегти" значення з поля "кількість на складі"
        додавалося як чертверта колонка у таблиці.
        */
        let productForm = document.forms.productForm;
        let productsTable = document.querySelector("#productsTable");
        let saveButton = document.querySelector("#saveButton");

        saveButton.addEventListener("click", function () {
            addRow(productForm.name.value,
                productForm.price.value,
                productForm.currency.value,
                productForm.storage.value);

            for (let i = 0; i < productForm.elements.length; i++) {
                const element = productForm.elements[i];
                if (element.type == "text") element.value = "";
            }
        });

        function addRow(name, price, currency, storage) {
            let tr = document.createElement("tr");
            tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${currency}</td>`);
            tr.insertAdjacentHTML('beforeend', `<td>${storage}</td>`)
            productsTable.append(tr);
        }