/*
        Завдання:
        Зробіть так, щоб значення, введене в поле вводу на даній сторінці зберігалося при кожній зміні.
        Коли користувач повторно зайде на цю сторінку, поле вводу повинне містити останнє введене значення.
        */
       let textArea = document.querySelector('textarea');
       if(document.cookie) {
            textArea.innerText = decodeURIComponent(document.cookie)
       }
       textArea.addEventListener('input', () => {
            document.cookie = encodeURIComponent(textArea.value);
       })