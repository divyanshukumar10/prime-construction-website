// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic year
  const yearSpans = document.querySelectorAll("#year");
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((span) => (span.textContent = currentYear));

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

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

  // Optional: keyboard support when user is on page
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") galleryPrev.click();
    if (e.key === "ArrowRight") galleryNext.click();
  });

  updateGallery();
}


  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
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
      }, 5000); // change every 5 seconds
    }
  }

  // Enquiry form (contact page) - mailto + thank-you card
  const enquiryForm = document.getElementById("enquiryForm");
  const thankYouCard = document.getElementById("thankYou");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value || "";
      const phone = document.getElementById("phone")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value || "";

      const to = "divyanshu.kr10@gmail.com";

      const emailSubject =
        service && service.trim().length > 0
          ? `New enquiry - ${service}`
          : "New flooring enquiry from website";

      const bodyLines = [
        "New enquiry from Prime Construction & Development International LLC website:",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service Required: ${service}`,
        "",
        "Message:",
        message,
      ];

      const mailtoLink = `mailto:${encodeURIComponent(
        to
      )}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailtoLink;

      // Show thank-you and hide form
      enquiryForm.reset();
      if (thankYouCard) {
        enquiryForm.style.display = "none";
        thankYouCard.hidden = false;
      }
    });
  }
});
