/*
        Завдання:
        // Додайте в даний сценарій обробку виключень у тій частин коду, де вони можуть виникнути знадобитися.
        */
        class Rect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
            }

            get width() {
                if (this._width === undefined) {
                    this._width = 0;
                }

                return this._width;
            }

            set width(value) {
                if (value < 0) {
                    throw new Error("Значення для width не може бути менше 0");
                } else {
                    this._width = value;
                }
            }

            get height() {
                if (this._height === undefined) {
                    this._height = 0;
                }

                return this._height;
            }

            set height(value) {
                if (value < 0) {
                    throw new Error("Значення для height не може бути менше 0");
                } else {
                    this._height = value;
                }
            }

            get area() {
                return this.height * this.width;
            }
        }

        let r1 = new Rect(10, 20);

        r1.height = -10; // помилка
        r1.width = 30;

        console.log("width " + r1.width);
        console.log("height " + r1.height);
        console.log("area " + r1.area);