(function() {
  function openMenu(nav) {
    var modal = nav.querySelector('.wp-block-navigation__responsive-container');
    if (modal) {
      modal.classList.add('is-menu-open', 'has-modal-open');
      modal.removeAttribute('hidden');
      // Focus first link in menu
      var first = modal.querySelector('a, button');
      if (first) first.focus();
    }
  }
  function closeMenu(nav) {
    var modal = nav.querySelector('.wp-block-navigation__responsive-container');
    if (modal) modal.classList.remove('is-menu-open', 'has-modal-open');
  }

  document.querySelectorAll('.wp-block-navigation__responsive-container-open').forEach(function(btn) {
    btn.addEventListener('click', function() { openMenu(btn.closest('nav')); });
  });
  document.querySelectorAll('.wp-block-navigation__responsive-container-close').forEach(function(btn) {
    btn.addEventListener('click', function() { closeMenu(btn.closest('nav')); });
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.wp-block-navigation__responsive-container.is-menu-open')
        .forEach(function(modal) { modal.classList.remove('is-menu-open', 'has-modal-open'); });
    }
  });
})();
