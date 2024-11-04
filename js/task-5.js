function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textbtn = document.querySelector('.color');
const colorbtn = document.querySelector('.change-color');

colorbtn.addEventListener('click', handleClick);
function handleClick() {
  const randomColor = getRandomHexColor();
  textbtn.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
