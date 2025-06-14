// Page Loader Animation
window.addEventListener("DOMContentLoaded", function () {
   const loader = document.getElementById("page-loader");

   setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => loader.remove(), 100);
   }, 1000);
});

// Header Background Change After Scroll
window.addEventListener("scroll", function () {
   const header = document.getElementById("mainHeader");
   if (window.scrollY > 70) {
      header.classList.add("scrolled");
   } else {
      header.classList.remove("scrolled");
   }
});
