console.log('class')

class Cat {

    constructor(catName) {
        console.log('ja ja');
        this.name = catName;
    }

    say() {

        console.log('Miau');
    }

    sayCatName() {
        console.log(this.name)
    }

}

const cat1 = new Cat('Pilkis');

const cat2 = new Cat('Pukis');

console.log(cat1);

console.log(cat2);

cat1.say();
cat2.say();

// const catsName = ['Pilkis', 'Rainius'];

// const cat1Name = catsName[0];
// const cat2Name = catsName[1];

//Dabar viskas tas pats kas virsuje, tik trumpiau:

const [cat1Name, cat2Name] = ['Pilkis', 'Rainius'];



console.log(`1: ${cat1Name}, o 2 : ${cat2Name}`)