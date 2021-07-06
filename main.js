const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

firstDiv.addEventListener('click', addRemoveTechClass);
secondDiv.addEventListener('click',addRemoveTechClass);
thirdDiv.addEventListener('click', addRemoveTechClass);

function addRemoveTechClass(event) {
  let elementTech = document.querySelector('.tech');
  if (event.target.className === '') {
    event.target.className = 'tech';
  }else{
    elementTech.className = '';
  }
  elementTech.className = '';
  input.value = '';
}

input.addEventListener('input', onType);

function onType(event) {
  let element = document.querySelector('.tech');
  element.textContent = input.value;
}

myWebpage.addEventListener('dblclick', myPortfolio);

function myPortfolio() {
  window.open('https://juujb.github.io/','_blank')
}

myWebpage.addEventListener('mouseover', changeToBlack);
myWebpage.addEventListener('mouseleave', changeToWhite);

function changeToBlack() {
  myWebpage.style.color = 'black';
}

function changeToWhite() {
  myWebpage.style.color = 'white';
}



function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

firstDiv.addEventListener('dblclick', resetText);
secondDiv.addEventListener('dblclick', resetText);
thirdDiv.addEventListener('dblclick', resetText);
