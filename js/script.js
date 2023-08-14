/* ============================ Typing Animation ============================ */

var typed = new Typed(".typing", {
  strings: [
    "",
    "Learner",
    "",
    "Cyber Security Enthusiast",
    "",
    "Web Developer",
    "",
    "Multimedia Officer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

var typed = new Typed(".name", {
  strings: ["", "Fredrik"],
  typeSpeed: 250,
});

/* ============================ Aside ============================ */

/* ====== Creating the Active Class ====== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // allSection[j].classList.add("back-section");
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  //   target = href[1];
  //   console.log(target);
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  //   console.log(element.getAttribute("href").split("#")[1]);
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  //   console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

/* ==================== Portfolio Image Modal ==================== */

// Get all elements with the class '.portfolio-modal-trigger'
const modalTriggers = document.querySelectorAll(".portfolio-modal-trigger");

// Get all elements with the class '.portfolio-modal'
const modals = document.querySelectorAll(".portfolio-modal");

// Get all elements with the class '.portfolio-modal-content'
const modalContents = document.querySelectorAll(".portfolio-modal-content");

// Get all elements with the class '.close'
const closeBtns = document.querySelectorAll(".close");

// Loop through each modal trigger
modalTriggers.forEach((trigger, index) => {
  // Add a click event listener to each trigger
  trigger.addEventListener("click", () => {
    // Display the corresponding modal
    modals[index].style.display = "block";

    // Set the content of the modal
    modalContents[index].src = trigger.src;

    // Add the 'block' class to the modal
    modals[index].classList.add("block");
  });
});

// Loop through each close button
closeBtns.forEach((closeBtn, index) => {
  // Add a click event listener to each close button
  closeBtn.addEventListener("click", () => {
    // Close the modal corresponding to the clicked close button
    closeModal(index);
  });
});

// Loop through each modal
modals.forEach((modal, index) => {
  // Add a click event listener to each modal
  modal.addEventListener("click", (event) => {
    // Close the modal if the clicked area is the modal itself
    if (event.target === modal) {
      closeModal(index);
    }
  });
});

// Function to close the modal
function closeModal(index) {
  // Hide the corresponding modal
  modals[index].style.display = "none";

  // Remove the 'block' class from the modal
  modals[index].classList.remove("block");
}
