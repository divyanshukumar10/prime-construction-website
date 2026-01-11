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

  // Enquiry form (contact page) - direct send via EmailJS
  const enquiryForm = document.getElementById("enquiryForm");
  const thankYouCard = document.getElementById("thankYou");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // ✅ Replace these with your real IDs from EmailJS
      const EMAILJS_SERVICE_ID = "service_iioahwn";
      const EMAILJS_TEMPLATE_ID = "template_23zd8ss";

      const name = document.getElementById("name")?.value?.trim() || "";
      const phone = document.getElementById("phone")?.value?.trim() || "";
      const service = document.getElementById("service")?.value?.trim() || "";
      const message = document.getElementById("message")?.value?.trim() || "";

      // Basic validation (extra safety)
      if (!name || !phone || !service || !message) {
        alert("Please fill all required fields.");
        return;
      }

      // EmailJS must be loaded + initialized in contact.html
      if (!window.emailjs || typeof window.emailjs.send !== "function") {
        alert(
          "Email service is not configured. Please ensure EmailJS is added and initialized in contact.html."
        );
        return;
      }

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const oldBtnText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      const templateParams = { name, phone, service, message };

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
          console.error("EmailJS error:", err);
          alert("Failed to send enquiry. Please try again.");
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = oldBtnText || "Submit";
          }
        });
    });
  }
});
