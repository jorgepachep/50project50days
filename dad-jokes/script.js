const jokes = [
    `I considered building the patio by myself. But I didn't have the stones.`,
    `My New Years resolution is to stop leaving things so late.`,
    `As I get older, I think of all the people I lost along the way. Maybe a career as a tour guide wasn't such a good idea.`];
let usedJokesIndex = [];

(() => {
    getRamdomJoke()
})()

function getRamdomJoke() {
    const availableJokesIndex = createRange(jokes.length).filter(val => isNaN(usedJokesIndex[val]));
    const randomJokeIndex = Math.floor(Math.random() * ((availableJokesIndex.length - 1) + 1));
    const randomJoke = jokes[availableJokesIndex[randomJokeIndex]]

    usedJokesIndex.push(availableJokesIndex[randomJokeIndex])
    document.getElementById('joke').innerText = randomJoke;

    if(usedJokesIndex.length === jokes.length)
        usedJokesIndex = [];
}

function createRange(number){
    const numbers = [];
    for(let i=0;i<number;i++){
        numbers.push(i)
    }
    return numbers;
}