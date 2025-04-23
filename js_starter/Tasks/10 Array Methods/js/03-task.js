let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
        let oddValues = [];
        let evenValues = [];
        // let oddValuesPosition = 0;
        // let evenValuesPosition = 0;

        for (let value of values)
        {
            if (value % 2 == 0)
            {
                // evenValues[evenValuesPosition] = value;
                // evenValuesPosition++;
                evenValues.push(value)
            }
            else
            {
                // oddValues[oddValuesPosition] = value;
                // oddValuesPosition++;
                oddValues.push(value)
            }
        }

        console.log("Непарні значення");
        for (let oddVal of oddValues)
        {
            console.log(oddVal);
        }

        console.log("Парні значення");
        for (let evenVal of evenValues)
        {
            console.log(evenVal);
        }