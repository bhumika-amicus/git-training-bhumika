document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  if (!container) {
    console.warn('Container element not found.');
    return;
  }

  const message = document.createElement('p');
  message.textContent = 'This app.js file is linked to index.html and ready for JavaScript enhancements.';
  message.style.color = '#333';
  message.style.fontSize = '1rem';
  container.appendChild(message);
});
