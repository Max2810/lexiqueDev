// change the background of the page according to the value of the checkbox
const input = document.querySelector('input[type="checkbox"]');
function handleInput() {
  const { checked } = this;
  document.querySelector('body').style.background = checked ? '#151d29' : '#d6e7f7';
  document.querySelector('body').style.color = checked ? '#dfe6e9' : '#145258';
}
input.addEventListener('input', handleInput);