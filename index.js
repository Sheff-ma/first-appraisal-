
  document.getElementById("year").textContent = new Date().getFullYear();


  document.addEventListener('DOMContentLoaded', function() {
    const counterElements = document.querySelectorAll('[data-count]');
    let animationTriggered = false;
    
    function animateCounters() {
      if (animationTriggered) return;
      
      const container = document.querySelector('.counters');
      const containerPosition = container.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (containerPosition < screenPosition) {
        animationTriggered = true;
        
        counterElements.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          const duration = 2000; // Animation duration in ms
          const stepTime = 20; // Time between each increment
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              current = target;
            }
            counter.textContent = Math.floor(current);
          }, stepTime);
        });
      }
    }
    
    // Run on load and scroll
    window.addEventListener('load', animateCounters);
    window.addEventListener('scroll', animateCounters);
  });

  