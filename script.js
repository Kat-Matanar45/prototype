class First {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log(`Привет я метод родителя!`)
    }
}

class Second extends First {
    hello2() {
        super.hello();
        console.log(`А я наследуемый метод!`)
    }
}

const elem = new First("Кирилл");
const elem2 = new Second("Саша");

elem.hello();
elem2.hello2(); 

console.log(elem);
console.log(elem2);

