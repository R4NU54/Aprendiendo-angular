// Destructuración

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

// Destructuración de Objetos.

const { song, songDuration:duration, details } = audioPlayer

const { author, year } = details

console.log ( `La cancion es: ${song} (${year}) de ${author} y tiene una duracion de ${duration} min. )`);

// Destructuración de arrays.

const [ ,  ,p3 = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']

console.log('Personaje 3 es: ' + p3);

export{}