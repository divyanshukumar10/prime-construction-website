// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic year
  const yearSpans = document.querySelectorAll("#year");
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((span) => (span.textContent = currentYear));

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Gallery Slider (arrows)
  const galleryTrack = document.querySelector(".gallery-track");
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  const galleryPrev = document.querySelector(".gallery-nav.prev");
  const galleryNext = document.querySelector(".gallery-nav.next");

  if (galleryTrack && gallerySlides.length > 0 && galleryPrev && galleryNext) {
    let gIndex = 0;

    const updateGallery = () => {
      galleryTrack.style.transform = `translateX(-${gIndex * 100}%)`;
    };

    galleryPrev.addEventListener("click", () => {
      gIndex = (gIndex - 1 + gallerySlides.length) % gallerySlides.length;
      updateGallery();
    });

    galleryNext.addEventListener("click", () => {
      gIndex = (gIndex + 1) % gallerySlides.length;
      updateGallery();
    });

    // Keyboard support
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") galleryPrev.click();
      if (e.key === "ArrowRight") galleryNext.click();
    });

    updateGallery();
  }

  // Banner slideshow
  const bannerSlides = document.querySelectorAll(".banner-slide");
  if (bannerSlides.length > 0) {
    let current = 0;

    // Ensure the first slide is active
    bannerSlides.forEach((s) => s.classList.remove("active"));
    bannerSlides[0].classList.add("active");

    if (bannerSlides.length > 1) {
      setInterval(() => {
        bannerSlides[current].classList.remove("active");
        current = (current + 1) % bannerSlides.length;
        bannerSlides[current].classList.add("active");
      }, 5000);
    }
  }

  // Enquiry form (contact page) - EmailJS direct send + thank-you card
  const enquiryForm = document.getElementById("enquiryForm");
  const thankYouCard = document.getElementById("thankYou");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // NOTE:
      // You MUST add EmailJS to contact.html:
      // <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
      // <script>emailjs.init("YOUR_PUBLIC_KEY");</script>
      //
      // And replace these values:
      const EMAILJS_SERVICE_ID = "service_iioahwn";
      const EMAILJS_TEMPLATE_ID = "template_23zd8ss";

      const name = document.getElementById("name")?.value || "";
      const phone = document.getElementById("phone")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value || "";

      const emailSubject =
        service && service.trim().length > 0
          ? `New enquiry - ${service}`
          : "New flooring enquiry from website";

      const templateParams = {
        // These fields should match your EmailJS template variables
        name,
        phone,
        service,
        message,
        subject: emailSubject,

        // If your template supports "to" and "cc", keep these.
        // Otherwise set To/CC inside the EmailJS template settings.
        to_email: "info@mypcdi.com",
        cc_email: "sushil@mypcdi.com",
      };

      // Guard: if EmailJS isn't loaded, show a helpful error
      if (typeof window.emailjs === "undefined") {
        alert(
          "Email service not configured. Please add EmailJS script + init in contact.html."
        );
        return;
      }

      // Optional: disable button to avoid multiple clicks
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      window.emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          enquiryForm.reset();
          if (thankYouCard) {
            enquiryForm.style.display = "none";
            thankYouCard.hidden = false;
          } else {
            alert("Thank you! Your enquiry has been sent.");
          }
        })
        .catch((err) => {
          console.error("EmailJS send failed:", err);
          alert("Failed to send enquiry. Please try again.");
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
          }
        });
    });
  }
});
