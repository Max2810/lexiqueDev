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


const retour = document.getElementById('retour');
function dePopOfReturnButton () {
    retour.style.display = 'none';
}



const t = setInterval(dePopOfReturnButton, 10000);

function popOfReturnButton () {
  retour.style.display = 'block';
}

document.addEventListener('click', popOfReturnButton);


// Reduction du texte sur HTML
const modal = document.getElementById('reductionHTML')

const seeModal = document.getElementById('open-HTML')

const modifHeight = document.getElement

seeModal.addEventListener("click", () => {
  modal.style.display = 'block';
  seeModal.style.display='none';}
);

const hideModal = document.getElementById('reduce-HTML')

hideModal.addEventListener("click", () => {
  modal.style.display = 'none';
  seeModal.style.display='block';  
});

// Reduction du texte sur CSS
const modalCss = document.getElementById('reductionCSS')

const seeModalCss = document.getElementById('open-CSS')

seeModalCss.addEventListener("click", () => {
  modalCss.style.display = 'block';
  seeModalCss.style.display='none';}
);

const hideModalCss = document.getElementById('reduce-CSS')

hideModalCss.addEventListener("click", () => {
  modalCss.style.display = 'none';
  seeModalCss.style.display='block';  
});

// Reduction du texte sur Java
const modalJava = document.getElementById('reductionJava')

const seeModalJava = document.getElementById('open-Java')

seeModalJava.addEventListener("click", () => {
  modalJava.style.display = 'block';
  seeModalJava.style.display='none';}
);

const hideModalJava = document.getElementById('reduce-Java')

hideModalJava.addEventListener("click", () => {
  modalJava.style.display = 'none';
  seeModalJava.style.display='block';  
});

// Reduction du texte sur JS
const modalJS = document.getElementById('reductionJS')

const seeModalJS = document.getElementById('open-JS')

seeModalJS.addEventListener("click", () => {
  modalJS.style.display = 'block';
  seeModalJS.style.display='none';}
);

const hideModalJS = document.getElementById('reduce-JS')

hideModalJS.addEventListener("click", () => {
  modalJS.style.display = 'none';
  seeModalJS.style.display='block';  
});

// Reduction du texte sur PHP
const modalPHP = document.getElementById('reductionPHP')

const seeModalPHP = document.getElementById('open-PHP')

seeModalPHP.addEventListener("click", () => {
  modalPHP.style.display = 'block';
  seeModalPHP.style.display='none';}
);

const hideModalPHP = document.getElementById('reduce-PHP')

hideModalPHP.addEventListener("click", () => {
  modalPHP.style.display = 'none';
  seeModalPHP.style.display='block';  
});

// Reduction du texte sur Python
const modalPython = document.getElementById('reductionPython')

const seeModalPython = document.getElementById('open-Python')

seeModalPython.addEventListener("click", () => {
  modalPython.style.display = 'block';
  seeModalPython.style.display='none';}
);

const hideModalPython = document.getElementById('reduce-Python')

hideModalPython.addEventListener("click", () => {
  modalPython.style.display = 'none';
  seeModalPython.style.display='block';  
});

// Reduction du texte sur C++
const modalC = document.getElementById('reductionC')

const seeModalC = document.getElementById('open-C++')

seeModalC.addEventListener("click", () => {
  modalC.style.display = 'block';
  seeModalC.style.display='none';
  });

const hideModalC = document.getElementById('reduce-C++')

hideModalC.addEventListener("click", () => {
  modalC.style.display = 'none';
  seeModalC.style.display='block';  
});

// Reduction du texte sur Front
const modalFront = document.getElementById('reductionFront')

const seeModalFront = document.getElementById('open-Front')

seeModalFront.addEventListener("click", () => {
  modalFront.style.display = 'block';
  seeModalFront.style.display='none';}
);

const hideModalFront = document.getElementById('reduce-Front')

hideModalFront.addEventListener("click", () => {
  modalFront.style.display = 'none';
  seeModalFront.style.display='block';  
});



// Reduction du texte sur End
const modalEnd = document.getElementById('reductionEnd')

const seeModalEnd = document.getElementById('open-End')

seeModalEnd.addEventListener("click", () => {
  modalEnd.style.display = 'block';
  seeModalEnd.style.display='none';}
);

const hideModalEnd = document.getElementById('reduce-End')

hideModalEnd.addEventListener("click", () => {
  modalEnd.style.display = 'none';
  seeModalEnd.style.display='block';  
});

