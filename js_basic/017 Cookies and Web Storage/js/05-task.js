/*
        Завдання, додайте можливість видаляти окремі задачі в списку. Зміни повинні зберігатися у localStorage
        */

        class Task {
            constructor(text) {
                this.text = text;
                this.isDone = false;
            }
        }

        let dataService = {
            tasks: [],

            get allTasks() {
                return this.tasks;
            },

            get notCompletedTasks() {
                return this.tasks.filter(task => task.isDone == false);
            },

            add(task) {
                this.tasks.push(task);
                this.save();
            },

            save() {
                localStorage.setItem("tasks", JSON.stringify(this.tasks));
            },

            open() {
                this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            },

            delete(div) {
                let pos = this.tasks.indexOf(div);
                this.tasks.splice(pos, 1);
                this.save()
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
                let tasks = dataService.allTasks;
                if (tasks.length == 0) return;

                tasks.forEach(task => {
                    taskElements.push(new TaskView(task))
                });
                this.#drawList(taskElements);
            }

            drawNotCompleted() {
                let taskElements = [];
                let tasks = dataService.notCompletedTasks;
                if (tasks.length == 0) return;

                tasks.forEach(task => {
                    taskElements.push(new TaskView(task))
                });
                this.#drawList(taskElements);
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

                let btn = document.createElement('button');
                btn.addEventListener('click', () => this.delete())
                btn.innerText = 'Видалати завдання';

                this.div.append(input);
                this.div.append(p);
                this.div.append(btn);

                if (this.task.isDone) {
                    this.div.classList.add("completed");
                    input.checked = true;
                }
                element.append(this.div);
            }

            changeState(element) {
                this.task.isDone = !this.task.isDone;
                dataService.save();
                this.div.classList.toggle("completed");
            }

            delete() {
                dataService.delete(this.div)
                this.div.remove()
            }
        }

        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let showAllButton = document.querySelector("#show-all-btn");
        let showNotCompletedButton = document.querySelector("#show-not-completed-btn");
        let taskList = document.querySelector(".task-list");

        dataService.open();
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
                dataService.add(newTask);
                tasksListView.drawAll();

                taskNameInput.value = "";
            } else {
                alert("Введіть назву задачі!");
            }
        }

        function showAllHandler() {
            tasksListView.drawAll();
        }

        function showNotCompletedHandler() {
            tasksListView.drawNotCompleted();
        }