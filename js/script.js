/* 
-----------------------------------
NAVBAR
-----------------------------------
*/
const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");

  const navLis = navbar.querySelectorAll("li");
  navLis.forEach((li) => {
    li.classList.toggle("mx--2");
    li.classList.toggle("m--2");
  });
};

hamburger.addEventListener("click", toggleMenu);

// INTERSECTOR API TO TOGGLE HAMBURGER COLOR - NO LONGER NEEDED, MITIGATED WITH CSS

//
// const navHeight = navbar.getBoundingClientRect().height;

// const toggleDark = function (entries) {
//   const [entry] = entries;

//   console.log(entries);

//   if (entry.isIntersecting) hamburger.classList.add("black");
//   else hamburger.classList.remove("black");
// };

// const hamburgerObserver = new IntersectionObserver(toggleDark, {
//   root: null,
//   threshold: 0.1,
//   rootMargin: `-${navHeight}px`,
// });

// hamburgerObserver.observe(hamburger);

/* 
-----------------------------------
SECTION REVEAL
-----------------------------------
*/

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/* 
-----------------------------------
PAGE TRANSITIONS
-----------------------------------
*/

window.onload = () => {
  const anchors = document.querySelectorAll("a:not(.same):not(.blank)");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      // console.log(transition_el);

      transition_el.classList.add("is-active");

      // console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
