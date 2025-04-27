/*
        Завдання:
        Зробіть так, щоб при натисненні на клавішу G фон div#colorOutput ставав зеленим,
        при натисненні на клавішу R фон div#colorOutput ставав червоним, 
        а при натисненні на клавішу B фон div#colorOutput ставав синім.
        */
       
       const div = document.querySelector('#colorOutput')
       const colors = {
            g: 'green',
            r: 'red',
            b: 'blue'
       }
       document.addEventListener('keydown', function(e) {
        const letter = e.key.toLowerCase()
        if(colors[letter]) div.style.background = colors[letter]
    })