//CHECKBOX
// $(".add-after").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0627 7.33363C16.3574 7.00445 16.3295 6.49869 16.0003 6.20398C15.6711 5.90927 15.1653 5.93721 14.8706 6.26639L11.2769 10.2804C10.5486 11.0938 10.0582 11.6387 9.63895 11.9911C9.23954 12.3268 9.00494 12.4 8.8 12.4C8.59507 12.4 8.36047 12.3268 7.96105 11.9911C7.54176 11.6387 7.05136 11.0938 6.32315 10.2804L5.39603 9.2449C5.10132 8.91573 4.59556 8.88779 4.26638 9.1825C3.93721 9.47721 3.90927 9.98297 4.20398 10.3121L5.17073 11.3919C5.84896 12.1495 6.41467 12.7815 6.93158 13.2159C7.47839 13.6755 8.06819 14 8.8 14C9.53181 14 10.1216 13.6755 10.6684 13.2159C11.1853 12.7815 11.751 12.1496 12.4293 11.392L16.0627 7.33363Z" fill="white"/></svg>');
$(".add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
// END CHECKBOX
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

