let randomValue = Math.floor(Math.random() * 101)
        let attempt = 1;
        let input;
        do{
            input = +prompt("Спробуйте вгадати число:)")
            if(input!=randomValue && input<randomValue){
                alert(`Моє число більше ніж ${input}.`);
                attempt++;
                continue;
            } else if(input!=randomValue && input>randomValue){
                alert(`Моє число менше ніж ${input}.`);
                attempt++;
                continue;
            }
        } while(input!=randomValue){
            console.log(`Ви вгадали число за ${attempt} спроб.`)
        }