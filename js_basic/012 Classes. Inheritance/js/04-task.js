/*
        Завдання:
        Внесіть наступні зміни: 
        1)  Зробіть так, щоб в Catalog, в метод add можна було додавати тільки ті об'єкти, які унаслідувалися від класу CatalogItem
            Якщо при виклику add передається інший об'єкт, через alert виводьте повідомлення на кшталт "Цей метод приймає тільки дочірні класи CatalogItem"
        2)  Додайте клас ProductWithDiscount - завданням класу є вивести продукт зі знижкою, яка була вказана в конструкторі
            Наслідуйте клас від класу Product
            Додайте для класу конструктор, завдяки якому буде додаватися знижка на продукт.
            Зробіть так, щоб клас самостійно рахував ціну продукту з врахуванням знижки та виводив на екран звичайну та акційну ціни (Можна вивести звичайну ціну закресленою).
            Замініть код catalog.add(new Product("images/img4.jpg", 65.55)); на catalog.add(new ProductWithDiscount("images/img4.jpg", 65.55, 20));, третій параметр 20 - знижка 20%
            Переконайтеся, що в каталозі останній продукт виводиться зі знижкою 20%
        */
        class CatalogItem {
            template;
            imagePath;

            constructor(image, templateSelector) {
                this.imagePath = image;
                this.template = document.querySelector(templateSelector).innerHTML;

            }

            renderIn(element) {
                let html = Mustache.render(this.template, this);
                element.innerHTML += html;
            }
        }

        class Product extends CatalogItem {
            price;

            constructor(imageaPath, price, templateSelector = "#product") {
                super(imageaPath, templateSelector);
                this.price = price;
            }
        }

        class Advertisement extends CatalogItem {
            url;

            constructor(imagePath, url) {
                super(imagePath, "#advertisement");
                this.url = url;
            }
        }

        class Catalog {
            items = [];
            element;

            constructor(elementSelector) {
                this.element = document.querySelector(elementSelector);
            }
            
            add(item) {
                   if(item instanceof CatalogItem != true) {
                        alert('Sorry, this function pass over only those objects, which prototype includes CatalogItem')
                   } else {
                        this.items.push(item);
                   }
                }

            show() {
                this.items.forEach(item => {
                    item.renderIn(this.element);
                });
            }
        }

        class ProductWithDiscount extends Product {
            discount;
            oldPrice;
            constructor(image, price, discount) {
                super(image, price, '#product-with-discount')
                this.discount = discount;
                this.oldPrice = this.price;
                this.price -= this.price / 100 * this.discount
            }
        }
        let catalog = new Catalog("#catalog");
        catalog.add({hello: 43})
        catalog.add(new Product("images/img1.jpg", 35.55));
        catalog.add(new Product("images/img2.jpg", 25.25));
        catalog.add(new Advertisement("images/banner1.jpg", "https://itvdn.com/ru/catalog"));
        catalog.add(new Product("images/img3.jpg", 14.55));
        catalog.add(new Advertisement("images/banner2.jpg", "https://itvdn.comru/ru/specialities"));
        catalog.add(new ProductWithDiscount("images/img4.jpg", 65.55, 20));

        catalog.show();