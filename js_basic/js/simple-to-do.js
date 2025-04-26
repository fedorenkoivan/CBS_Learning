let input = document.querySelector("#user-value");
        let addTaskButton = document.querySelector("#add-task");
        let taskList = document.querySelector("#task-list");
        let startMessage = document.querySelector("#start-message");

        addTaskButton.addEventListener('click', addTaskHandler)

        function createTask(text) {
            let div = document.createElement('div');
            div.classList.add('task');

            let input = document.createElement('input');
            input.addEventListener('click', changeTaskState)
            input.type = 'checkbox';

            let p = document.createElement('p');
            p.innerText = text;

            div.append(input);
            div.append(p);

            return div
        }

        function changeTaskState() {
            if(this.checked) {
                this.parentElement.classList.add('completed');
            } else {
                this.parentElement.classList.remove('completed')
            }
        }

        function addTaskHandler() {
            if(input.value) {
                if(!startMessage.hidden) startMessage.hidden = true
                
                let newTask = createTask(input.value);
                taskList.append(newTask);
                input.value = ''
            } else {
                alert('Write your task in input, please.')
            }
        }