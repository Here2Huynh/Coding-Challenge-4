//Santa's Node Helper

const fs = require('fs');

//My Solution
const floorFinder = () => {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('my-time');
        const directions = data.toString();
        let currentFloor = 0;
        let positionCounter = '';
        let firstTime = false;
        for (i = 0; i < directions.length; i++) {
            if (directions[i] === '(') {
                currentFloor++;
            }
            else if (directions[i] === ')') {
                currentFloor--;
                if (currentFloor < 0 && firstTime === false) {
                    positionCounter = i + 1;
                    firstTime = true;
                }
            }
        }
        console.timeEnd('my-time');
        console.log('Santa\'s current floor:', currentFloor);
        console.log('First time in basement:', positionCounter);
    })
}

floorFinder();


//Andrei's solution
function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('andrei-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            }
            else if (currentValue === ')') {
                return acc -= 1 
            }
        },0)
        console.timeEnd('andrei-time');
        console.log('floor:', answer);
    })
}

question1();

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('andrei-time2');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1
            }
            else if (currentItem === ')') {
                accumulator -= 1 
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('andrei-time2');
        console.log('basement entered at: ', counter);
    })
}

question2();



