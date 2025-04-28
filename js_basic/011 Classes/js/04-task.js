/*
        Завдання:
        Додайте в користувацький інтерфейс дві кнопки: "Показати усе"
        При натисненні на кнопку "Показати незавершенні задачі" в списку задач повинні відображатися тільки завершені задачі.
        При натисненні на "Показати все" в списку задач повинні відображатися всі задачі.

        Підказка
        При натисненні на кнопки, треба видаляти контент елементу .task-list і на основі даних, які знаходяться в масиві
        tasks, наново будувати DOM вибираючи з масиву ті об'єкти, у яких властивість isDone має відповідне значення.
        */
        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let taskList = document.querySelector(".task-list");
        let unBtn = document.querySelector(".uncomleted-task-btn");
        let showAll = document.querySelector(".show-all-task-btn");
        let tasks = [];
        
        unBtn.addEventListener('click', function () {
            tasks.forEach(task => {
            if(task.isDone) {
                task.div.remove();
            }
        })
        })
        
        showAll.addEventListener('click', function () {
            tasks.forEach(task => {
                taskList.append(task.div)
            })
        })

        addTaskButton.addEventListener("click", addTaskHandler);

        taskNameInput.addEventListener("keydown", function (e) {
            if (e.code == "Enter") addTaskHandler();
        })

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = new Task(taskNameInput.value);
                newTask.createIn(taskList);
                tasks.push(newTask);

                taskNameInput.value = "";
            } else {
                alert("введите имя задачи");
            }
        }

        class Task {
            constructor(text) {
                this.text = text;
                this.isDone = false;
                this.div = null;
            }

            createIn(element) {
                this.div = document.createElement("div");
                this.div.classList.add("task");

                let input = document.createElement("input");
                input.addEventListener("click", () => this.changeState(this.div));
                input.type = "checkbox";

                let p = document.createElement("p");
                p.innerText = this.text;

                this.div.append(input);
                this.div.append(p);
                element.append(this.div);
            }

            changeState(element) {
                this.isDone = !this.isDone;
                element.classList.toggle("completed");
            }
        }