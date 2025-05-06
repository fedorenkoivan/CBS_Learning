interface Report {
    name: string;
    build: () => string;
}

// implements - ключове слово для реалізації інтерфейсу в класі
// якщо члени інтерфейсу не будуть визначені в класі, компілятор видасть помилку
class DailyReport implements Report {
    name: string = "Daily Report";

    build() : string {
        return "some daili report data";
    }
}

class WeaklyReport implements Report {
    name: string = "Weakly Report";

    build() : string {
        return "some weakly report data";
    }
}

console.log(new DailyReport().build());
console.log(new WeaklyReport().build());