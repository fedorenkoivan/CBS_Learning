alert("Рахуємо об'єм циліндру, без паніки");

        let height = Number(prompt("Введіть висоту, бажано в сантиметрах"));
        let radius = Number(prompt("Введіть радіус. Теж в сантиметрах"));

        let volume = Math.floor(Math.PI * Math.pow(radius, 2) * height)

        alert(`Об'єм циліндра з висотою ${height}см i радіусом ${radius}см дорівнює ${volume}`)