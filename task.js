class Car {
    constructor(brand, model, color, year, speed, fuelCapacity, km, fuelFor1Km, currentFuel) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.fuelCapacity = fuelCapacity;
        this.km = km;
        this.fuelFor1Km = fuelFor1Km;
        this.currentFuel = currentFuel;
    }

    ShowInfo() {
        return (this);
    }

    AddFuel(yanacaq) {
        if (this.currentFuel + yanacaq > this.fuelCapacity) {
            return "yanacaq çənində yetəri qədər yer yoxdur deyilsin";
        } else {
            this.currentFuel +yanacaq<=this.fuelCapacity;
            return "yanacaq uğurla əlavə edildi";
        }
    }

    Drive(km) {
        var lazimyanacaq = km * this.fuelFor1Km;
        if (lazimyanacaq > this.currentFuel) {
            return "yeterli yanacaq yoxdur";
        } else {
            this.currentFuel -= lazimyanacaq;
            this.km += km;
            return "unvana catdiq";
        }
    }
}

let car1 = new Car("bmw", "f10", "white", 2020, 240, 50, 5400, 0.2, 20);
console.log(car1.ShowInfo());
console.log(car1.AddFuel(20));
console.log(car1.Drive(100));
