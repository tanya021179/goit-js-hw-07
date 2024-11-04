const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', () => {
  const trimName = inputName.value.trim();
  outputName.textContent = trimName || 'Anonimus';
});
