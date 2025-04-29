/*
        Завдання:
        Додайте валідацію даних з наступними правилами:
        Все поля форми обов'язкові для вводу
        balance - значення повинне бути більше 1000
        email - значення повинне бути в формате електронної адреси
        age - значення повинне бути більше 18

        Для запобігання перезавантаження сторінки відміняйте дію за замовчанням, обробляючи подію submit.
        */

        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name'
            }
        ];

        // Клас для виводу інформації в UL
        class ListService {
            selectedData;
            data;
            listElement;

            constructor(data, listElement, displayFn) {
                this.data = data;
                this.listElement = listElement;

                for (let index = 0; index < data.length; index++) {
                    const currentData = data[index];

                    let li = document.createElement("li");
                    li.textContent = displayFn(currentData);
                    currentData.id = index; // для каждого пользователя указываем id, который совпадает с id в разметке
                    li.dataset.id = index;

                    this.listElement.append(li);
                }
            }

            select(id) {
                this.selectedData = this.data.filter(x => x.id == id)[0];
                this.deselectAll();

                const index = this.data.indexOf(this.selectedData);
                this.listElement.children[index].classList.add("selected");
            }

            deselectAll() {
                for (let i = 0; i < this.listElement.children.length; i++) {
                    const child = this.listElement.children[i];
                    child.classList.remove("selected");
                }
            }

            // удаление данных из разметки и массива
            deleteSelectedItem() {
                const index = this.data.indexOf(this.selectedData);
                if (index != -1) {
                    this.listElement.children[index].remove();
                    this.data.splice(index, 1);
                }
            }
        }

        // Клас для роботи з формою, редактує інформацію про користувача
        class UserFormService {
            currentUser;
            form;

            constructor(form) {
                this.form = form;
            }

            fillForm(user) {
                this.currentUser = user;

                this.form.firstName.value = user.name.first;
                this.form.lastName.value = user.name.last;
                this.form.companyName.value = user.company;
                this.form.balance.value = user.balance;
                this.form.email.value = user.email;
                this.form.age.value = user.age;
            }

            saveForm() {
                this.currentUser.name.first = this.form.firstName.value;
                this.currentUser.name.last = this.form.lastName.value;
                this.currentUser.company = this.form.companyName.value;
                this.currentUser.balance = this.form.balance.value;
                this.currentUser.email = this.form.email.value;
                this.currentUser.age = this.form.age.value;
            }

            // очистка формы
            resetForm() {
                this.form.reset();
            }
        }

        let userList = document.querySelector("#userList");
        let saveButton = document.querySelector("#saveButton");
        let deleteButton = document.querySelector("#deleteButton");
        const form = document.forms[0]; 

        let listService = new ListService(users, userList, x => x.name.first + " " + x.name.last);
        let formService = new UserFormService(document.forms[0]);

        userList.addEventListener("click", function (e) {
            if (e.target.tagName != "LI") return;

            const userNumber = e.target.dataset.id;
            listService.select(userNumber);
            formService.fillForm(listService.selectedData);
        });

        saveButton.addEventListener("click", function () {
            formService.saveForm();
        });

        // видаляємо і очищуємо форму
        deleteButton.addEventListener("click", function () {
            listService.deleteSelectedItem();
            formService.resetForm();
        });
        
        form.addEventListener('submit', function (event) {
            formService.saveForm();
            event.preventDefault();
        })