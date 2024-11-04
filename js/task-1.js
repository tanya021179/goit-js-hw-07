const allItem = document.querySelectorAll('.item');
console.log(`Number of categoties: ${allItem.length}`);

allItem.forEach((element) => {
  const item = element.querySelector('h2').textContent;
  const itemNum = element.querySelectorAll('li').length;
  console.log(`Category: ${item} 
Elements: ${itemNum}`);
});
