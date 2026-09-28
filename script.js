const items = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  items.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        el.style.transitionDelay = `${(el.dataset.d || 0) * 0.4}s`;
        el.classList.add("in");
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  items.forEach((el) => io.observe(el));
}
