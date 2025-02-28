document.addEventListener("DOMContentLoaded", () => {
    // Typing & Erasing Effect
    const roles = ["Machine Learning Engineer", "Data Scientist", "Data Analyst"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing-text");
    let isDeleting = false;
    const typeSpeed = 30;
  
    function type() {
      const currentRole = roles[roleIndex];
  
      if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
  
        if (charIndex === currentRole.length) {
          setTimeout(() => (isDeleting = true), 1200);
        }
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
  
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(type, isDeleting ? typeSpeed / 2 : typeSpeed);
    }
    type();
  
    // Intersection Observer for "pop-in" animation
    const popOnScrollElements = document.querySelectorAll(".pop-on-scroll");
    const observerOptions = { threshold: 0.1 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pop-in");
        }
      });
    }, observerOptions);
  
    popOnScrollElements.forEach(el => observer.observe(el));
  
    // Responsive Navbar Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show-links");
    });

     // 1) Get references to the container & buttons
  const projectsScroll = document.getElementById("projects-scroll");
  const projectsPrevBtn = document.getElementById("projects-prev-btn");
  const projectsNextBtn = document.getElementById("projects-next-btn");

  // 2) Distance to scroll each time
  const SCROLL_DISTANCE = 300;

  // 3) Click event for Prev button
  projectsPrevBtn.addEventListener("click", () => {
    projectsScroll.scrollBy({
      left: -SCROLL_DISTANCE,
      behavior: "smooth"
    });
  });

  // 4) Click event for Next button
  projectsNextBtn.addEventListener("click", () => {
    projectsScroll.scrollBy({
      left: SCROLL_DISTANCE,
      behavior: "smooth"
    });
  });


  // BLOGS SCROLL LOGIC
  const blogsScroll = document.getElementById("blogs-scroll");
  const blogsPrevBtn = document.getElementById("blogs-prev-btn");
  const blogsNextBtn = document.getElementById("blogs-next-btn");

  // Scroll distance (adjust as you like)
  const BLOGS_SCROLL_DISTANCE = 300;

  blogsPrevBtn.addEventListener("click", () => {
    blogsScroll.scrollBy({
      left: -BLOGS_SCROLL_DISTANCE,
      behavior: "smooth"
    });
  });

  blogsNextBtn.addEventListener("click", () => {
    blogsScroll.scrollBy({
      left: BLOGS_SCROLL_DISTANCE,
      behavior: "smooth"
    });
  });







  });
  