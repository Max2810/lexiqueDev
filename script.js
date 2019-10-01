// change the background of the page according to the value of the checkbox
const input = document.querySelector('input[type="checkbox"]');
const textLink = document.getElementsByClassName('textLink');
function handleInput() {
  const { checked } = this;
  document.querySelector('body').style.background = checked ? '#2c3e50' : '#d6e7f7';
  document.querySelector('body').style.color = checked ? '#dfe6e9' : '#145258';
  for(let i = 0 ; i < textLink.length ; i++) {
    textLink[i].style.color = checked ? '#ffa500' : ' #6c5ce7';
  }
}
input.addEventListener('input', handleInput);

console.log('Test');


const retour = document.getElementById('retour');
function dePopOfReturnButton () {
    retour.style.display = 'none';
}


const t = setInterval(dePopOfReturnButton, 5000);

function popOfReturnButton () {
  retour.style.display = 'block';
}

document.addEventListener('click', popOfReturnButton);

