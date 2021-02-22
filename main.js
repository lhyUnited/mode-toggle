// 默认白天模式
const html = document.querySelector('html');

(function init () {
  html.setAttribute('data-color-mode', 'light')
})();


function handleToggle () {
  let mode = html.getAttribute('data-color-mode');
  mode = mode === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-color-mode', mode);
}

const toggle = document.querySelector('.toggle-wrapper');
toggle.addEventListener('click', handleToggle);