// COLLAPSIBLE SIDEBAR
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.onclick = function() {
  if (sidebar.className.indexOf('collapsed') === -1) {
    sidebar.className += ' collapsed';
  } else {
    sidebar.className = 'sidebar';
  }
  return;
};
// END COLLAPSIBLE SIDEBAR