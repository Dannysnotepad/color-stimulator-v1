/*
*Color Stimulator v1
*from
*Dannysnotepad
*/

alert('Hey🙂 \nwelcome to Color Stimulator v1 \nNote some color viriations where added so all colors are not as accurate')
alert('Click on any button to activate color')

const body = document.querySelector('body')

const green = document.getElementById('green')
const pink = document.getElementById('pink')
const blue = document.getElementById('blue')

const black = document.getElementById('black')
const white = document.getElementById('white')
const brown = document.getElementById('brown')

const gray = document.getElementById('gray')
const lilac = document.getElementById('lilac')
const yellow = document.getElementById('yellow')

const gold = document.getElementById('gold')
const purple = document.getElementById('purple')
const lime = document.getElementById('lime')

green.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green'
  green.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  white.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

pink.addEventListener('click', () => {
  document.body.style.backgroundColor = 'pink'
  pink.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

blue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue'
  blue.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

black.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black'
  black.style.backgroundColor = 'white'
  black.style.color = 'black'
  black.style.boxShadow = '0px 0px 10px yellow'
  
  blue.style.boxShadow = '2px 2px 0px white'
  lilac.style.boxShadow = '2px 2px 0px white'
  yellow.style.boxShadow = '2px 2px 0px white'
  pink.style.boxShadow = '2px 2px 0px white'
  green.style.boxShadow = '2px 2px 0px white'
  brown.style.boxShadow = '2px 2px 0px white'
  gray.style.boxShadow = '2px 2px 0px white'
  gold.style.boxShadow = '2px 2px 0px white'
  lime.style.boxShadow = '2px 2px 0px white'
  purple.style.boxShadow = '2px 2px 0px white'
})

white.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white'
  white.style.boxShadow = '0px 0px 10px black'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

brown.addEventListener('click', () => {
  document.body.style.backgroundColor = 'brown'
  brown.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

gray.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gray'
  gray.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

lilac.addEventListener('click', () => {
  document.body.style.backgroundColor = '#B5902B'
  lilac.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

yellow.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow'
  yellow.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

gold.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gold'
  gold.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})

purple.addEventListener('click', () => {
  document.body.style.backgroundColor = 'purple'
  purple.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  lime.style.boxShadow = '2px 2px 0px black'
})

lime.addEventListener('click', () => {
  document.body.style.backgroundColor = 'limegreen'
  lime.style.boxShadow = '0px 0px 10px white'
  black.style.backgroundColor = 'black'
  black.style.color = 'white'
  black.style.boxShadow = '2px 2px 0px white'
  
  blue.style.boxShadow = '2px 2px 0px black'
  lilac.style.boxShadow = '2px 2px 0px black'
  yellow.style.boxShadow = '2px 2px 0px black'
  pink.style.boxShadow = '2px 2px 0px black'
  green.style.boxShadow = '2px 2px 0px black'
  brown.style.boxShadow = '2px 2px 0px black'
  gray.style.boxShadow = '2px 2px 0px black'
  gold.style.boxShadow = '2px 2px 0px black'
  purple.style.boxShadow = '2px 2px 0px black'
})