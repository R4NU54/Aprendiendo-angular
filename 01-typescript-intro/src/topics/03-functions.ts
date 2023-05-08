


function addNumbers (a:number ,b: number) {
return a +b
}

const addNumbersArrows = (a:number,b:number):string => {
    return `${a + b}` 
}

function multiply ( firtsNumber: number, secondNumber?: number, base:number = 2): number{
    return (firtsNumber * base)
}

interface Character {
    name: string,
    hp: number,
    showHp: () => void,
}

// const result = addNumbers(1, 2)
// const result2 = addNumbersArrows(5, 2)
// const multiplyResult = multiply (5, 2)

// console.log({result, result2, resultMultiply: multiplyResult});

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount
}

const aragorn: Character = {
    name: 'Aragorn',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}.`);
    }
}

healCharacter ( aragorn, 10)

aragorn.showHp()

export {}