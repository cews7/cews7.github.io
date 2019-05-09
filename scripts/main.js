var string = "Hi, I'm Eric. I'm a full-stack developer."
var el = document.getElementById('name');
var split = string.split("");
(function animate() {
split.length > 0 ? el.innerHTML += split.shift() : clearTimeout(running);
var running = setTimeout(animate, 110);
})();

function scrollProjects() {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': document.querySelector('.projects-section').offsetTop
  });
}

function scrollAboutMe() {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 710
  });
}
