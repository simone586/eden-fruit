document.addEventListener('DOMContentLoaded', function() {
  const btnTorna = document.getElementById('btnTorna');

  if (btnTorna) {
    btnTorna.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
});
