import { createLogger } from 'winston'

const skills: string[] = ['bash', 'Counter', 'Headling']


interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'Counter']
}

strider.hometown='Rivendell'

console.table(strider);

export {}