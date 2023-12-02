const box = document.querySelector('.img-box');
const wrap = document.querySelector('.img-wrap');
const line = document.getElementById('line');

const leftSpace = box.offsetLeft;

box.addEventListener('mousemove', (e) => {
  const position = e.pageX - leftSpace + 'px';
  wrap.style.width = position;
  line.style.left = position;
});
