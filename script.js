// Marks each <section> as "in-view" while it's visible in the viewport.
// New sections just need to be added to the DOM (id="section-N") to pick this up.
const sections = document.querySelectorAll('#scrolly > section');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    }
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

// "Enter the tunnel" scrolls to whatever section comes next, once one exists.
document.querySelector('.hd-tunnel-btn')?.addEventListener('click', (event) => {
  const nextSection = event.currentTarget.closest('section')?.nextElementSibling;
  nextSection?.scrollIntoView({ behavior: 'smooth' });
});
