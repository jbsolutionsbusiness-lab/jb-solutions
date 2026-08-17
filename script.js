const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const business = data.get("business") || "Business";
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent(`JB Solutions Business Project — ${business}`);
  const body = encodeURIComponent(
    `Business: ${business}\nContact: ${name}\nEmail: ${email}\n\nWhat needs improvement:\n${message}`
  );

  window.location.href = `mailto:jacenb2005@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app…";
});
