const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// Copie esse arquivo e edite apenas ele;
// Crie uma função que adicione a classe 'tech' ao elemento selecionado;

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
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
secondDiv.addEventListener('dblclick', resetText);
thirdDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.