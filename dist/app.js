window.addEventListener('load', initializeApp);


//GLOBAL VARIABEL
let time  = 5;
let score = 0;
let isPlaying;


const textInput     = document.querySelector('#input-keyword');
const currentWord   = document.querySelector('#current-word');
const scoreDisplay  = document.querySelector('#score');
const timeDisplay   = document.querySelector('#time');
const message       = document.querySelector('#message');
const second        = document.querySelector('#seconds');
const showTime      = document.querySelector('#show-time');

const wordData = [
    'javascript app',
    'node js',
    'mongodb',
    'pwa',
    'firebase',
    'socket.io',
    'react',
    'react native',
    'heroku',
    'express js',
    'mocha',
    'jest',
    'amazone'
];

function initializeApp()
{
    showWord(wordData);
    showTime.innerHTML = `Kecepatan mengetik <b>${time}</b>. detik`;
    textInput.addEventListener('input', startPlay);

    setInterval(countDown, 1000);
    setInterval(checkStatusPlay, 50);
}

document.querySelector('#change-speed').addEventListener('change', function(){
    if(this.value !== ''){
        time = parseInt(this.value) + 1;
        showWord(wordData);
        showTime.innerHTML = `Kecepatan mengetik ${time - 1}. detik`;
    }else{
        time = 6;
    }
   
});

function startPlay()
{
    if(matchWord()){
        isPlaying = true;
        time = 6;
        showWord(wordData);
        textInput.value = '';
        score++;
    }

    scoreDisplay.innerHTML = score;
}

function matchWord()
{
    if(textInput.value === currentWord.innerHTML)
    {
        message.style.color = 'green';
        message.innerHTML = 'Correct!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

function showWord(words)
{
    const random = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[random];
}

function countDown()
{
    if(time > 0)
    {
        time--;
    }else if(time === 0)
    {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatusPlay()
{
    if(!isPlaying && time === 0)
    {
        message.style.color = 'red';
        message.innerHTML = 'Game Over';
        score = 0;
    }
}
