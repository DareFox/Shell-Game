function random(max) {
    return Math.floor(Math.random() * max)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const input = require('input');
const colors = require('colors');

async function start() {
const coin = '▬▬▬'.yellow
const animations = {
    allClosed: "........................\n..|═══|...|═══|...|═══|.\n..| 1 |...| 2 |...| 3 |.\n..|___|...|___|...|___|.\n........................",
    empty: {
        one: "..|═══|.................\n..| 1 |...|═══|...|═══|.\n..|___|...| 2 |...| 3 |.\n..........|___|...|___|.\n........................",
        two: "..........|═══|.........\n..|═══|...| 2 |...|═══|.\n..| 1 |...|___|...| 3 |.\n..|___|...........|___|.\n........................",
        three: "..................|═══|.\n..|═══|...|═══|...| 3 |.\n..| 1 |...| 2 |...|___|.\n..|___|...|___|.........\n........................"
    },
    withCoin: {
        one: `..|═══|.................\n..| 1 |...|═══|...|═══|.\n..|___|...| 2 |...| 3 |.\n..........|___|...|___|.\n...${coin}..................`,
        two: `..........|═══|.........\n..|═══|...| 2 |...|═══|.\n..| 1 |...|___|...| 3 |.\n..|___|...........|___|.\n...........${coin}..........`,
        three: `..................|═══|.\n..|═══|...|═══|...| 3 |.\n..| 1 |...| 2 |...|___|.\n..|___|...|___|.........\n...................${coin}..`,
    }
}


for (var i = 0; i < 10; i++) {
    if (prevPos == undefined) {var prevPos = null}

    do {
        var randomPos = random(3) + 1
    } while (prevPos == randomPos)

    async function starting() {
        await sleep(150)
        console.clear()
        console.log(animations.allClosed)
        await sleep(150);
        console.clear()
    }

    switch (randomPos) {
        case 1: 
            await starting()
            console.log(animations.withCoin.one)
            break;
        case 2:
            await starting()
            console.log(animations.withCoin.two);
            break;
        case 3:
            await starting()
            console.log(animations.withCoin.three);
            break;
        }
    
    prevPos = randomPos
}

await sleep(150)
console.clear()
console.log(`${animations.allClosed}\n`)

var userInput = await input.select('Which of the thimbles coin?', [
    {name: '1', value: 1},
    {name: '2', value: 2},
    {name: '3', value: 3}
])


if (userInput == randomPos)
{
    console.clear()
    switch (randomPos) {
        case 1: console.log(animations.withCoin.one); break;
        case 2: console.log(animations.withCoin.two); break;
        case 3: console.log(animations.withCoin.three); break;
    }
    console.log("\n\nCongratualations!!!".green)
}
else
{
    console.clear()
    switch (userInput) {
        case 1: console.log(animations.empty.one); break;
        case 2: console.log(animations.empty.two); break;
        case 3: console.log(animations.empty.three); break;
    }
    console.log("\n\nYOU DIED".red)
}
}

start()
