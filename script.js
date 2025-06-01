
function showImage(img) {
  alert('Просмотр изображения: ' + img.alt);
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.style.display = 'block';
      form.reset();
    });
  }
});
function handleRegister(event) {
  event.preventDefault();
  document.getElementById('registerMsg').style.display = 'block';
  event.target.reset();
  return false;
}
