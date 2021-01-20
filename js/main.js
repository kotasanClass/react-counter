'use strict';

{
  const counter = document.getElementById('counter');
  const minusBtn = document.getElementById('minusBtn');
  const plusBtn = document.getElementById('plusBtn');

  let countNum = 0;

  counter.textContent = countNum;
  
  function minus() {
    minusBtn.addEventListener('click', () => {
      if (countNum <= 0) {
        return;
      }
      countNum--;
      counter.textContent = countNum;
    });
  }
  
  function plus() {
    plusBtn.addEventListener('click', () => {
      countNum++;
      counter.textContent = countNum;
    });
  }
  

  minus();
  plus();
}