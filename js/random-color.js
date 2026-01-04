const colors = ['#2ca9e1', '#e77c5c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];

window.addEventListener('DOMContentLoaded', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--bg-color', randomColor);
});
