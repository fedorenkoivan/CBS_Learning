/*
        Завдання:
        Допрацюйте сценарій.
        Зробіть так, щоб при наведенні на ім'я користувача в списку, у div#output відображалися 
        вік (age), баланс (balance), компанія (company) та email даного користувача
        */

        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name'
            }
        ];
        let userList = document.querySelector("#userList");
        let output = document.querySelector("#output");

        for (let index = 0; index < users.length; index++) {
            const currentUser = users[index];
            let li = document.createElement("li");
            li.textContent = currentUser.name.first + " " + currentUser.name.last;
            li.addEventListener("mouseenter", mouseEnterHandler);
            li.addEventListener("mouseout", clearOutput)
            li.dataset.userNumber = index;
            userList.append(li);
        }

        function mouseEnterHandler(event) {
            const user = users[this.dataset.userNumber];
            output.insertAdjacentHTML('beforeend', `<p> First name: ${user.name.first}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Last name: ${user.name.last}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Age ${user.age}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Company: ${user.company}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Balance: ${user.balance}</p>`);
        }

        function clearOutput() {
            output.textContent = ''
        }