/*
        Завдання:
        Додайте для кнопки testBtn обробник на подію click.
        Обробник повинен виводити на екран сповіщення Hello world.
        Додайте обробник трьома можливими способами.
        */
       const btn = document.querySelector('#testBtn')
       greating = () => {
        alert('Hello world')
       }
       btn.addEventListener('click', greating)
       
       btn.onclick = greating