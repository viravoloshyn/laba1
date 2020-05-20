const {string_separate} = require('./task1')
const {combinations} = require('./task2')
const {sFact}=require('./task3');
const {maximum}=require('./task4');
const {calendar}=require('./task5');

const {Passenger}=require('./Passenger');
const {Ticket}=require('./Ticket');
const {Train}=require('./Train');



//Task 1 Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій.
console.log('---------------Task 1---------------');

console.log(string_separate("На вулиці теплий вечір"))


//Task 2 Написати функцію, яка поверне усі перестановки слова
console.log('---------------Task 2---------------');
console.log(combinations('абв'));
console.log(combinations('abcde').length)

//Task 3 Написати функцію, яка порахує факторіал натурального числа
console.log('---------------Task 3---------------');

let userNum = 4;
console.log(`${userNum}! = ${sFact(userNum)}`);

//Task 4 Знайти елемент із найбільшою частотою повторень
console.log('---------------Task 4---------------');

let qwerty = [7, 3, 2, 7, 9, 1, 6, 4, 8, 2, 3, 5, 3, 4];


console.log(maximum(qwerty));

//Task 5 Написати функцію, яка поверне кількість днів для заданого місяця та року.
console.log('---------------Task 5---------------');


console.log(calendar(4, 2010));

//Task 6 Написати реалізацію швидкого сортування масиву
console.log('---------------Task 6---------------');

let mass = [34, 20, 4, 39, 7, 12, 42, 26];

function QuickSort(A) {
    if (A.length === 0) return [];
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return QuickSort(a).concat(p, QuickSort(b));
}

console.log(QuickSort(mass));

//task 7 Реалізувати з допомогою прототипів або класів такі інформаційні об’єкти:
// a. Пасажир
// b. Квиток
// c. Потяг


console.log('---------------Task 7---------------');


let passengers = [new Passenger('Olaf', 1, 12345), new Passenger('Milana', 2, 12346),
    new Passenger('Sem', 20, 12347), new Passenger('Ben', undefined, 12348)];

let tickets = [new Ticket(12, 5, new Date(2020, 2, 12, 5, 10), 80),
    new Ticket(54, 21, new Date(2020, 3, 19, 5, 10), 80),
    new Ticket(12, 4, new Date(2020, 4, 20, 5, 10), 80),
    new Ticket(34, 2, new Date(2020, 30, 4, 5, 10), 80),
    new Ticket(34, 2, new Date(2020, 30, 4, 5, 10), 80),
    new Ticket(34, 2, new Date(2020, 30, 4, 5, 10), 80)];

let trains = [new Train(10, 5, 15), new Train(59, 10, 31),
    new Train(15, 7, 13), new Train(83, 5, 20)];

// Додавання нового пасажира в колекцію
console.log('\nДодавання нового пасажира в колекцію');

let addNewPass = (pass) => {
    Passengers.push(pass);
};

console.log(Passengers);

addNewPass(new Passenger('Kop', 17, 12223));

console.log(Passengers);

// Редагування пасажира в колекції
console.log('\nРедагування пасажира в колекції');

let newInfoPass = (pass, ticket, document) => {
    pass.ticket = ticket;
    pass.document = document;
};

console.log(Passengers[0]);

newInfoPass(Passengers[0], 18, 12322);

console.log(Passengers[0]);

// Видалення пасажира з колекції
console.log('\nВидалення пасажира з колекції');

let deletePass = (pass) => {
    Passengers.forEach((value, index, array) => {
        if (pass.name === value.name &&
            pass.ticket === value.ticket &&
            pass.document === value.document) array.splice(index, 1)
    })
};

console.log(Passengers);

deletePass(Passengers[2]);

console.log(Passengers);

// Пошук одного пасажира в колекції
console.log('\nПошук одного пасажира в колекції');
let findPass = (pass) => {
    let ovePass;

    Passengers.forEach((value, index) => {

        if (value.name === pass.name &&
            value.ticket === pass.ticket &&
            value.document === pass.document) ovePass = value;
    });
    if (ovePass !== undefined) console.log(`Наш пасажир: ${ovePass.name} з квитком ${ovePass.ticket}`);
    else console.log('Такого пасажира не існує у колекції!')

};

findPass(Passengers[0]);

// Додавання потяга в колекцію
console.log('\nДодавання потяга в колекцію');

let addNewTrain = (train) => {
    Trains.push(train);
};

console.log(Trains);

addNewTrain(new Train(45, 16, 7));

console.log(Trains);
// Редагування потяга в колекції
console.log('\nРедагування потяга в колекції');

let editTrain = (train, newWagons, newWay) => {
    train.wagons = newWagons;
    train.way = newWay;
};

editTrain(Trains[2], 42, 22);
console.log(Trains);

// Видалення потяга з колекції
console.log('\nВидалення потяга з колекції');

let deleteTrain = (train) => {
    Trains.forEach((value, index, array) => {
        if (train.number === value.number &&
            train.wagons === value.wagons &&
            train.way === value.way) array.splice(index, 1)

    })
};

deleteTrain(Trains[0]);

console.log(Trains);

// Пошук одного потяга в колекції
console.log('\nПошук одного потяга в колекції');


let findTrain = (train) => {
    let oveTrain;

    Trains.forEach((value, index) => {

        if (value.number === train.number &&
            value.wagons === train.wagons &&
            value.way === train.way) oveTrain = value;
    });
    if (oveTrain !== undefined) console.log(`Наш потяг номер ${train.number} з шляхом ${train.way}`);
    else console.log('Такого потяга не існує у колекції!')

};

findTrain(Trains[3]);

// Покупка пасажиром квитка на потяг
console.log('\nПокупка пасажиром квитка на потяг');

let byeTicket = (pass, ticket) => {
    pass.ticket = ticket.number;
    console.log(`Пасажир ${pass.name} купує квиток № ${pass.ticket}`)
};

byeTicket(Passengers[3], Tikets[0]);

// Зміна квитка із одного потяга на інший
console.log('\nЗміна квитка із одного потяга на інший');

let changeTicket = (pass, ticket) => {
    let oldTicket = pass.ticket;
    pass.ticket = ticket.number;
    if (oldTicket === ticket.number) console.log('Ми не можемо замінити квиток на такий же! Виберіть інший квиток.');
    else console.log(`Пасажир ${pass.name} змінює квиток № ${oldTicket} на квиток №${pass.ticket}!`)
};

changeTicket(Passengers[3], Tikets[0]);

// Скасування покупки квитка
console.log('\nСкасування покупки квитка');
let cancelTicket = (pass) => {
    let oldTicket = pass.ticket;
    if (oldTicket === undefined) console.log(`Пасажир ${pass.name} ітак не має квитка!!!`)
    else console.log(`Пасажир ${pass.name} відміняє квиток № ${oldTicket}!!!`)
}

cancelTicket(Passengers[0]);

//Пошук потяга на який продали найбільше/найменше квитків
console.log('\nПошук потяга на який продали найбільше/найменше квитків');

let sellsTickets = (trains, tickets) => {
    let allTrains = {};
    let fin = {MaxTrain: '', MinTrain: '', min: 0, max: 0};


    trains.forEach(value => {

        allTrains[value.number] = 0;

        tickets.forEach(ticket => {

            if (value.number === ticket.train) allTrains[value.number] = allTrains[value.number] + 1;
        })
    });


    let max = Object.values(allTrains)[0];
    let min = Object.values(allTrains)[0];

    for (let key in allTrains) {
        if (allTrains[key] > max) {
            fin.max = allTrains[key];
            fin.MaxTrain = key;
        }
        if (allTrains[key] < min) {
            fin.min = allTrains[key];
            fin.MinTrain = key;
        }
    }

    console.log(`Найбільше квитків (${fin.max}) продали на поїзд ${fin.MaxTrain}`);
    console.log(`Найменше квитків (${fin.min}) продали на поїзд ${fin.MinTrain}`);

};


sellsTickets(Trains, Tikets);