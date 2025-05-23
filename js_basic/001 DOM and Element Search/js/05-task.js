/* 
        Завдання:
        Змініть виклики методів getElementById, getElementsByName, getElementsByTagName, getElementsByClassName 
        на виклики методів querySelector або querySelectorAll так, щоб поведінка сценарію не змінилася.
        */

        let paragraph = document.querySelector("first");
        paragraph.style.border = "2px solid red";

        let radioButtons = document.querySelectorAll("answer");
        for (const button of radioButtons) {
            button.checked = !button.checked;
        }

        let listItems = document.querySelectorAll("li");
        for (const item of listItems) {
            item.style.margin = "2px";
            item.style.border = "2px solid green";
        }

        let lists = document.querySelectorAll("my-list");
        for (const list of lists) {
            list.style.border = "2px solid blue";
        }