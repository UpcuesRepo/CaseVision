$(document).ready(function () {
  ("use strict");
  //CHECKBOX
  // $(".add-after").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0627 7.33363C16.3574 7.00445 16.3295 6.49869 16.0003 6.20398C15.6711 5.90927 15.1653 5.93721 14.8706 6.26639L11.2769 10.2804C10.5486 11.0938 10.0582 11.6387 9.63895 11.9911C9.23954 12.3268 9.00494 12.4 8.8 12.4C8.59507 12.4 8.36047 12.3268 7.96105 11.9911C7.54176 11.6387 7.05136 11.0938 6.32315 10.2804L5.39603 9.2449C5.10132 8.91573 4.59556 8.88779 4.26638 9.1825C3.93721 9.47721 3.90927 9.98297 4.20398 10.3121L5.17073 11.3919C5.84896 12.1495 6.41467 12.7815 6.93158 13.2159C7.47839 13.6755 8.06819 14 8.8 14C9.53181 14 10.1216 13.6755 10.6684 13.2159C11.1853 12.7815 11.751 12.1496 12.4293 11.392L16.0627 7.33363Z" fill="white"/></svg>');
  $(".add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  // END CHECKBOX
 
  
 
  // BROWSE FILES
  $('#file-upload').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').text(filename);
  });
  // END BROWSE FILES

    // BROWSE FILES
    $('.file-upload').change(function () {
      var filepath = this.value;
      var m = filepath.match(/([^\/\\]+)$/);
      var filename = m[1];
      $('.filename').text(filename);
    });
    // END BROWSE FILES

  // FILE UPLOAD
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
 
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
 
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
 
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
 
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
 
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
 
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
 
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
 
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
 
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
 
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
 
    thumbnailElement.dataset.label = file.name;
 
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
 
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  // FILE UPLOAD END
 
 

// COLLAPSIBLE SIDEBAR
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
  if (!sidebar.classList.contains("collapsed")) {
    sidebar.classList.add("collapsed");
    document.querySelectorAll(".content-part").forEach(function (element) {
      element.classList.add("open");
    });
    document.querySelectorAll(".arrow").forEach(function (element) {
      element.classList.add("rotate");
    });
  } else {
    sidebar.classList.remove("collapsed");
    document.querySelectorAll(".content-part").forEach(function (element) {
      element.classList.remove("open");
    });
    document.querySelectorAll(".arrow").forEach(function (element) {
      element.classList.remove("rotate");
    });
  }
});
// END COLLAPSIBLE SIDEBAR
  
 
  // MULTI SELECT 1
  /*var multipleCancelButton1 = new Choices('#choices-multiple-remove-button',
  {
    removeItemButton: true,
    maxItemCount: 5,
    searchResultLimit: 5,
    renderChoiceLimit: 5
  });
  
  
  
  // MULTI SELECT 2
  var multipleCancelButton2 = new Choices('#choices-multiple-remove-button-2', {
    removeItemButton: true,
    maxItemCount: 10,
    searchResultLimit: 5,
    renderChoiceLimit: 5
  });*/
  // END MULTI SELECT
 
  
 
 
 
 
 
  // START TOOLTIP
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // END TOOLTIP
 
  
 
 
 
});
 
 
 
 
 
// COLLAPSIBLE SIDEBAR
// const menuBtn = document.getElementById('menu-btn');
// const sidebar = document.getElementById('sidebar');
 
// menuBtn.onclick = function() {
//   if (sidebar.className.indexOf('collapsed') === -1) {
//     sidebar.className += ' collapsed';
//     $('.content-part').addClass('open');
//     $('.arrow').addClass('rotate');
//   } else {
//     sidebar.className = 'sidebar';
//     $('.content-part').removeClass('open');
//     $('.arrow').removeClass('rotate');
//   }
//   return;
// };
 
// END COLLAPSIBLE SIDEBAR