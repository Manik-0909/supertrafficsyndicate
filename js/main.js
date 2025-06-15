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

// Recapcha + Email
async function validateCaptchaAndSubmit(event) {
   event.preventDefault();

   const captchaResponse = grecaptcha.getResponse();
   if (!captchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return false;
   }

   const responseField = document.querySelector(
      'textarea[name="g-recaptcha-response"]'
   );
   if (responseField) {
      responseField.setAttribute("name", "_g-recaptcha-response");
   }

   const form = event.target;
   const formData = new FormData(form);
   const submitButton = form.querySelector('button[type="submit"]');

   // Disable button and show loading text
   submitButton.disabled = true;
   submitButton.innerText = "Sending...";

   try {
      const res = await fetch(form.action, {
         method: "POST",
         body: formData,
      });

      if (res.ok) {
         // Show success toast
         const toastEl = document.getElementById("successToast");
         const toast = new bootstrap.Toast(toastEl);
         toast.show();

         form.reset();
         grecaptcha.reset();
      } else {
         alert("❌ Submission failed. Please try again.");
      }
   } catch (err) {
      alert("⚠️ Error: " + err.message);
   }

   // Re-enable button
   submitButton.disabled = false;
   submitButton.innerText = "Send";

   return false;
}
