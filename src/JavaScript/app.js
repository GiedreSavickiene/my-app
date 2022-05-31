function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



console.log('labas pasauli')


const namas = ['Petras', 'Lina', 'Bebras', 'Bobikas', 'Leopardas', 'Sima', 'Rima'];

console.table(namas)

console.table(namas[2])

// namas[0] = 'Barsukas'
// console.table(namas)

for (let i = 0; i < namas.length; i++) {
    console.log(namas[i])
}

// let kartai = 0;

// let moneta;
// do {
//     moneta = rand(0, 1) ? 'skaicius' : 'herbas'
//     console.log(moneta)
// } while (moneta != 'herbas')

// let pinigai = rand(100, 300)

// while (pinigai <= 200) {
//     const uzdirbta = rand(20, 50)
//     pinigai = pinigai + uzdirbta;
//     console.log('dirbu', pinigai)
// }

const sayHello1 = () => {
    const a = 7 + 8
    console.log("gavau:" + a)

}

sayHello1()


const sayHello2 = (b, c) => {
    const a = b + c
    console.log("gavau:" + a)

}
sayHello2(7, 1)

const sayHello3 = (b, c) => {
    const a = b + c
    return a
}

const rezult = sayHello3(10, 21)
console.log(rezult)

const sayHello5 = (b) => b * 5;
rez = sayHello5(5)
console.log(rez)

const sayHello6 = (b, a) => b * a
rez1 = sayHello6(5, 4)
console.log(rez1)

const asNaudojuCallBack = (callback, b, c) => {
    const a = callback(b, c);
    return a;
}

rez = asNaudojuCallBack(sayHello6, 6, 10);
console.log(rez)

const manoFun = (el) => {
    console.log(el)

}

namas.forEach((el, i) => console.log(el, i))

namas.forEach(el => console.log(el.length))

namas.forEach((el, i) => console.log(el.length * (i + 1)))

const map1 = namas.map(x => console.log(x.length))

const map2 = namas.map(x => ('+' + (x) + '+'))
console.table(map2)

const map3 = namas.map(e => (e === 'Lina') ? '<span>' + e + '</span>' : '<div>' + e + '</div>')
console.table(map3)

const map4 = namas.map((e, i) => (i % 2) ? (e + '!') : e)
console.table(map4)

const map5 = namas.map((e, i) => (e[0] == "B") ? e.length : e)
console.table(map5)

const filter = namas.filter(el => el[0] == 'B')
console.table(filter)

const filter1 = namas.filter(el => el.length > 6)
console.table(filter1)

const filter2 = namas.filter(el => (el[0] != 'B')).map(el => el.length)
console.table(filter2)

namas.sort(function (a, b) { return (b.length - a.length) })
console.table(namas)

namas.sort((a, b) => {
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
    return 0
})
console.table(namas)




const mm = namas.map(e => e.length).filter(e => e > 4).sort((a, b) => b - a)
console.table(mm)




