// Page Loader Animation
window.addEventListener("DOMContentLoaded", function () {
   const loader = document.getElementById("page-loader");

   setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => loader.remove(), 100);
   }, 1000);
});
