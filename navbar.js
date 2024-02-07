const navbar = document.querySelector(".container");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute('data-scroll-watcher', '');

navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver( (data) => {
    navbar.classList.toggle('scrolled', !data[0].isIntersecting)
});

navObserver.observe(scrollWatcher);

