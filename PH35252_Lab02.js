const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

//======== lab2.1

//yc 1
const events = [...new Set(gameEvents.values())];
console.log(events);

//yc2
gameEvents.delete(64);

//yc3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minuties`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minuties`);

//yc 4
for ( const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
}

// =========== lab2.2

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').style.width = '50px'
document.querySelector('button').style.height = '30px'
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for(const [i, row] of rows.entries()){
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
    }
})