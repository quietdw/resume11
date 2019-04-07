ScrollReveal().reveal('.widget', {
  origin: 'bottom',
  distance: '100px',
  duration: 500,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  delay: 0,
  opacity: 0,
  reset: true,
  scale: 0.8,
});
ScrollReveal().reveal('.widget1', {
  origin: 'bottom',
  distance: '100px',
  duration: 500,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  delay: 300,
  opacity: 0,
  reset: true,
  scale: 0.8,
});
window.onload = function () {
  setTimeout(() => {
    loadingContainer.classList.remove('active')
  }, 300)
}