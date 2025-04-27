/*
        Задание:
        Внесите необходимые правки в шаблон #template (подключите библиотеку mustache.js или используйте чистый JavaScript)
        Перепишите функцию createTask таким образом, чтобы новые задачи создавались с помощью шаблона #template а не через document.createElement
        */
        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let taskList = document.querySelector(".task-list");

        addTaskButton.addEventListener("click", addTaskHandler);
        taskList.addEventListener("click", changeTaskState);

        function createTask(text) {
            let div = document.createElement("div");
            div.classList.add("task");

            let input = document.createElement("input");
            input.type = "checkbox";

            let p = document.createElement("p");
            p.innerText = text;

            div.append(input);
            div.append(p);

            return div;
        }

        function changeTaskState(e) {
            // Если событие пришло не от checkbox - игнорируем его
            if (e.target.nodeName != "input" && e.target.type != "checkbox") {
                return;
            }

            if (e.target.checked) {
                e.target.parentElement.classList.add("completed");
            } else {
                e.target.parentElement.classList.remove("completed");
            }
        }

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = createTask(taskNameInput.value);
                taskList.append(newTask);
                taskNameInput.value = "";
            } else {
                alert("введите имя задачи");
            }
        }