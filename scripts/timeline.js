document.addEventListener('DOMContentLoaded', () => {
  // Animate horizontal timeline root line and items
  const timeline = document.querySelector('.timeline');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timeline) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timeline.classList.add('drawn');
            timelineItems.forEach((item, index) => {
              setTimeout(() => item.classList.add('active'), index * 300);
            });
          } else {
            timeline.classList.remove('drawn');
            timelineItems.forEach(item => item.classList.remove('active'));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(timeline);
  }

  // Animate vertical timeline root line and items
  const mobileTimeline = document.querySelector('.timeline-mobile');
  const mobileItems = document.querySelectorAll('.timeline-item-mobile');

  if (mobileTimeline) {
    const observerMobile = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            mobileTimeline.classList.add('drawn');
            mobileItems.forEach((item, index) => {
              setTimeout(() => item.classList.add('visible'), index * 300);
            });
          } else {
            mobileTimeline.classList.remove('drawn');
            mobileItems.forEach(item => item.classList.remove('visible'));
          }
        });
      },
      { threshold: 0.3 }
    );

    observerMobile.observe(mobileTimeline);
  }
});
