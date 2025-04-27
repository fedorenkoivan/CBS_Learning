/*
        Завдання:
        Зробіть так, щоб в кожній створеній задачі після тексту задачі створювалася кнопка "Видалити".
        При натисненні на кнопку все завдання видалялося з списку задач.
        */
        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let taskList = document.querySelector(".task-list");

        addTaskButton.addEventListener("click", addTaskHandler);

        function createTask(text) {
            let div = document.createElement("div");
            div.classList.add("task");

            let input = document.createElement("input");
            input.addEventListener("click", changeTaskState);
            input.type = "checkbox";

            let p = document.createElement("p");
            p.innerText = text;

            let btn = document.createElement('button')
            btn.innerText = 'Видалити'
            btn.classList.add('delete-button')
            btn.addEventListener('click', removeElement)

            div.append(input);
            div.append(p);
            div.append(btn)

            return div;
        }

        function changeTaskState() {
            if (this.checked) {
                this.parentElement.classList.add("completed");
            } else { 
                this.parentElement.classList.remove("completed");
            }
        }

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = createTask(taskNameInput.value);
                taskList.append(newTask);
                taskNameInput.value = "";
            } else { 
                alert("Введіть ім'я задачі");
            }
        }

        function removeElement() {
            this.parentElement.remove()
        }