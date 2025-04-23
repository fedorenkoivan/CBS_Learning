let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];


        let input = prompt("Hello, which city do you want to delete?")

        cities.includes(input)? cities.splice(cities.indexOf(input), 1)
        : console.log(`Sorry, ${input} is not defined at array.`)
        console.log(cities)