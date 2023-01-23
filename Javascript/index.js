const myLogo = document.querySelector(".logo");
const downIcon = document.querySelector(".down");

myLogo.innerHTML = isMyLogo();
downIcon.innerHTML = isDownIcon();

function isMyLogo() {
  return `
  <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_94_981)">
  <path d="M340 0.225553V192.122H43.5824V222.564H340V340H0V296.489H296.414V266.075H0V148.611H296.414V66.7003L224.478 98.1261L170.252 121.851L115.999 98.1261L43.5824 66.4782L0 47.4472V0L43.5824 19.0592L170.252 74.4325L296.414 19.2813L340 0.225553Z" fill="#117EFF"/>
  </g>
  <defs>
  <clipPath id="clip0_94_981">
  <rect width="340" height="340" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `;
}
function isDownIcon() {
  return `
  <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path class="a1" d="M32 2L24.5 7.61142L17 13.2217L9.5 7.61142L2 2" stroke="#117EFF" stroke-width="4" stroke-miterlimit="10"/>
  <path class="a2" d="M32 13.9456L24.5 19.5559L17 25.1662L9.5 19.5559L2 13.9456" stroke="#117EFF" stroke-width="4" stroke-miterlimit="10"/>
  <path class="a3"  d="M32 25.166L24.5 30.7763L17 36.3866L9.5 30.7763L2 25.166" stroke="#117EFF" stroke-width="4" stroke-miterlimit="10"/>
  </svg>
  `;
}

const section = document.querySelectorAll("section.page");
const navLinks = document.querySelectorAll("header nav a");
const down = document.querySelector(".down");

const menuToggle = document.querySelector(".menu input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

let tinggi = window.innerHeight;

if (tinggi <= 600) {
  down.style.display = "none";
}

const homeHeight = document.querySelector("#home");

homeHeight.style.height = `100vh`;

/////////////////////////////////////////
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop -50;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log(offset);
    console.log(height);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");

        const nav = document.querySelector("header");
        if (id == "portfolio" || id === "contact") {
          nav.classList.add("colorNav");
        } else {
          nav.classList.remove("colorNav");
        }
      });
    }

    const portfolioHeight = document.querySelector("#portfolio");
    const aboutHeight = document.querySelector("#about");
    const contactHeight = document.querySelector("#contact");
    let vHeight = [];
    let innerHeight = window.innerHeight;
    if (top <= 400) {
      // tinggi background
      vHeight.push(innerHeight);
      portfolioHeight.style.height = `${vHeight[0]}px`;
      aboutHeight.style.height = `${vHeight[0]}px`;
      contactHeight.style.height = `${vHeight[0]}px`;
    }
    if(innerHeight <= 600){
      portfolioHeight.style.height = `100%`;
      aboutHeight.style.height = `100%`;
      contactHeight.style.height = `100%`;
    }
    if (top >= 300) {
      down.style.opacity = "0";
      down.style.transition = "1s";
    }
  });
};

// ////////////////////////////////////////////

