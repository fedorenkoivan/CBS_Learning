/*
            Завдання:
            Перепишіть код з використанням класів.
            Створіть клас MonthReport з властивостями month, amount, users.
            Додайте в клас метод render, який буде візуалізувати контент класу на сторінці.
            Створіть масив екземплярів класу MonthReport зі значеннями, які зараз знаходяться в масиві source.
            Пройдіть циклом по масиву і на кожному елементі класу MonthReport викличіть метод render.
        */


        // let source = [
        //     {
        //         month: "Січень",
        //         amount: 20,
        //         users: ["Claudia Contreras", "Blair Hayden", "Montgomery Cohen"]
        //     },
        //     {
        //         month: "Лютий",
        //         amount: 140
        //     },
        //     {
        //         month: "Березень",
        //         amount: 115,
        //         users: ["Blair Hayden", "Montgomery Cohen"]
        //     }
        // ];

        // let template = document.querySelector("#monthReport").innerHTML;
        // let output = document.querySelector("#output");

        // document.querySelector("button").addEventListener("click", function () {
        //     for (let i = 0; i < source.length; i++) {
        //         const monthData = source[i];
        //         let html = Mustache.render(template, monthData);
        //         output.insertAdjacentHTML("beforeend", html);
        //     }
        // });
        const body = document.body
        class MonthReport {
            constructor(month, amount, users) {
                this.month = month,
                this.amount = amount, 
                this.users = users;
            }
            render() {
                let div = document.createElement('div');

                let month = document.createElement('p');
                month.innerHTML = 'Month: ' + this.month;
                div.append(month);
                
                let amount = document.createElement('p');
                amount.innerHTML = 'Amount: ' + this.amount;
                div.append(amount);
                
                if(this.users != undefined) {
                let ul = document.createElement('ul')
                this.users.forEach(user => {
                    let li = document.createElement('li');
                    li.innerText = user;
                    ul.append(li)
                })
                div.append(ul)
                }
                div.classList = 'report-block'
                body.append(div)
            }
        }
        let array = [
            new MonthReport('January', 20, ["Claudia Contreras", "Blair Hayden", "Montgomery Cohen"]),
            new MonthReport('February', 140),
            new MonthReport('March', 115, ["Blair Hayden", "Montgomery Cohen"])
        ]
        array.forEach(report => {
            report.render()
        })