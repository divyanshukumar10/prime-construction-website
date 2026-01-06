// script.js

// Dynamic year
document.addEventListener("DOMContentLoaded", () => {
    const yearSpans = document.querySelectorAll("#year");
    const currentYear = new Date().getFullYear();
    yearSpans.forEach((span) => (span.textContent = currentYear));
  });
  
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }
  
  // Enquiry form mailto handler
  const enquiryForm = document.getElementById("enquiryForm");
  const formStatus = document.getElementById("formStatus");
  
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const phone = document.getElementById("phone")?.value || "";
      const company = document.getElementById("company")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const subject = document.getElementById("subject")?.value || "";
      const message = document.getElementById("message")?.value || "";
  
      const to = "divyanshu.kr10@gmail.com";
  
      const emailSubject =
        subject.trim() || "New Flooring Enquiry - Prime Construction Website";
  
      const bodyLines = [
        "New enquiry from Prime Construction & Development International LLC website:",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        `Service Type: ${service}`,
        "",
        "Project Details:",
        message
      ];
  
      const mailtoLink = `mailto:${encodeURIComponent(
        to
      )}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  
      window.location.href = mailtoLink;
  
      if (formStatus) {
        formStatus.textContent =
          "Your email client should now open with the enquiry. Please review and send.";
      }
    });
  }
 // script.js

// Set dynamic year in footer(s)
// script.js

// Set dynamic year in footer(s)
document.addEventListener("DOMContentLoaded", () => {
  const yearSpans = document.querySelectorAll("#year");
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((span) => (span.textContent = currentYear));
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Enquiry form mailto handler for contact page
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
      message
    ];

    const mailtoLink = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open user's email client with pre-filled message
    window.location.href = mailtoLink;

    // Show thank-you message in the form area
    enquiryForm.reset();
    enquiryForm.style.display = "none";

    if (thankYouCard) {
      thankYouCard.hidden = false;
    }
  });
}


// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Enquiry form mailto handler for contact page
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

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
      message
    ];

    const mailtoLink = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open user's email client with pre-filled message
    window.location.href = mailtoLink;

    if (formStatus) {
      formStatus.textContent =
        "Your email client should now open with the enquiry details. Please review and send.";
    }
  });
}
 