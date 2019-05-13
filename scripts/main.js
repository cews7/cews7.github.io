const string = "Hi, I'm Eric. I'm a full-stack web developer."
let el = document.getElementById('name');
let split = string.split("");
(function animate() {
split.length > 0 ? el.innerHTML += split.shift() : clearTimeout(running);
let running = setTimeout(animate, 110);
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
    'top': document.querySelector('.about-me').offsetTop
  });
}
let modal = document.getElementById('resume');

let btn = document.getElementById("resume-modal");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
