// COLLAPSIBLE SIDEBAR
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.onclick = function() {
  if (sidebar.className.indexOf('collapsed') === -1) {
    sidebar.className += ' collapsed';
    $('.content-part').addClass('open');
    $('.arrow').addClass('rotate');
  } else {
    sidebar.className = 'sidebar';
    $('.content-part').removeClass('open');
    $('.arrow').removeClass('rotate');
  }
  return;
};
// END COLLAPSIBLE SIDEBAR

// START TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// END TOOLTIP