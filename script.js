function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    // Use ternary operator for a concise conditional expression
    reveals[i].classList.toggle("active", elementTop < windowHeight - elementVisible);
  }
}

window.addEventListener("scroll", reveal);

// Scroll down arrow click event
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow");

  arrow.addEventListener("click", () => {
    // Use window.scrollTo() for smooth scrolling
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
});

// Bottom to top button script
$(document).ready(function () {
  var btn = $("#button");

  $(window).scroll(function () {
    // Simplify the condition using jQuery scrollTop()
    btn.toggleClass("show", $(this).scrollTop() > 300);
  });

  btn.on("click", function (e) {
    e.preventDefault();
    // Use window.scrollTo() for smooth scrolling to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Links for directing to specific content by section
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".__container [data-section]");

  navItems.forEach(function(item) {
    item.addEventListener("click", function() {
      const targetId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetId);
      
      // Check if the target section exists
      if (targetSection) {
        // Use window.scrollTo() for smooth scrolling to the target section
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});
