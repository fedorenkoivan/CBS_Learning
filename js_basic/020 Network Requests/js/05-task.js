/*
        Завдання:
        Додайте логіку обробки статус кодів помилок клієнта та серверної сторони.
        Продумайте також обробку і вивід виключень, пов'язаних з іншими проблемами при мережевих запитах
        зміни на:
        додав catch ловця на 104 рядок
        */
        class Task {
            constructor(text) {
                this.text = text;
                this.isDone = false;
            }
        }

        let dataService = {
        url : 'https:/jsonplaceholder.typicode.com/todos',
        
        get allTasks () {
            return fetch(this.url)
            .then(responce => responce.json())
            .then(json => this.mapArray(json))
            .catch(error => alert(error.message));
        },

        get notComletedTasks () {
            return fetch(this.url + '?completed=false')
                .then(responce => responce.json())
                .then(json => this.mapArray(json));
        },

        add(task) {
            return fetch(this.url, {
                method: 'POST',
                body: JSON.stringify({title: task.text, completed: task.isDone})
            })
            .then(responce => responce.json());
        },

        update(task) {
            return fetch(this.url + '/' + task.id, {
                method: 'PUT',
                body: JSON.stringify({title: task.text, completed: task.isDone})
            })
            .then(responce => responce.json());
        },
        
        mapArray(array) {
            return array.map(element => {
                return{
                    id: element.id,
                    text: element.title,
                    isDone: element.completed
                }
            });
        }
}

        class TasksListView {
            element;
            dataService;

            constructor(element) {
                this.element = element;
                dataService = dataService;
            }

            #drawList(tasksElements) {
                this.element.innerHTML = "";

                tasksElements.forEach(taskElement => {
                    taskElement.createIn(this.element);
                });
            }

            drawAll() {
                let taskElements = [];
                dataService.allTasks.then(tasks => {
                    if (!tasks) return;

                    tasks.forEach(task => {
                        taskElements.push(new TaskView(task))
                    });
                    this.#drawList(taskElements);
                });
            }

            drawNotCompleted() {
                let taskElements = [];
                dataService.notCompletedTasks.then(tasks => {
                    if (tasks.length == 0) return;

                    tasks.forEach(task => {
                        taskElements.push(new TaskView(task))
                    });
                    this.#drawList(taskElements);
                });
            }
        }

        class TaskView {
            constructor(task) {
                this.task = task;
                this.div = null;
            }

            createIn(element) {
                this.div = document.createElement("div");
                this.div.classList.add("task");

                let input = document.createElement("input");
                input.addEventListener("click", this.changeState.bind(this));
                input.type = "checkbox";

                let p = document.createElement("p");
                p.innerText = this.task.text;

                this.div.append(input);
                this.div.append(p);

                if (this.task.isDone) {
                    this.div.classList.add("completed");
                    input.checked = true;
                }
                element.append(this.div);
            }

            changeState(element) {
                this.task.isDone = !this.task.isDone;
                dataService.update(this.task);
                this.div.classList.toggle("completed");
            }
        }

        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let showAllButton = document.querySelector("#show-all-btn");
        let showNotCompletedButton = document.querySelector("#show-not-completed-btn");
        let taskList = document.querySelector(".task-list");

        let tasksListView = new TasksListView(taskList);

        addTaskButton.addEventListener("click", addTaskHandler);
        showAllButton.addEventListener("click", showAllHandler);
        showNotCompletedButton.addEventListener("click", showNotCompletedHandler);

        window.addEventListener("load", function () {
            tasksListView.drawAll();
        });

        taskNameInput.addEventListener("keydown", function (e) {
            if (e.code == "Enter") addTaskHandler();
        })

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = new Task(taskNameInput.value);
                dataService.add(newTask).then(() => tasksListView.drawAll());
                taskNameInput.value = "";
            } else {
                alert("введите имя задачи");
            }
        }

        function showAllHandler() {
            tasksListView.drawAll();
        }

        function showNotCompletedHandler() {
            tasksListView.drawNotCompleted();
        }