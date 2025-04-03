// ===== SWIPER
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  speed: 3000,
  spaceBetween: 31,
  autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 1500,
  },
  centerSlides: true,
  breakpoints: {
    1441: {
      slidesPerView: 3.4,
    },
    1025: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1.5,
    },
  },
});

// ===== TABS

const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tabsInfo");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const isActiveTab = document.querySelector(".tab-button.active");
    if (isActiveTab) {
      isActiveTab.classList.remove(
        "active",
        "bg-transparent",
        "text-[#00afe1]",
        "border-[#00afe1]"
      );
    }
    contents.forEach((content) => content.classList.add("hidden"));
    contents.forEach((content) => content.classList.remove("flex"));
    tab.classList.add(
      "active",
      "bg-transparent",
      "text-[#00afe1]",
      "border-[#00afe1]"
    );

    const target = tab.getAttribute("data-target");
    const targetContent = document.getElementById(target);
    targetContent && targetContent.classList.remove("hidden");
    targetContent && targetContent.classList.add("flex");
  });
});

// ===== BUTTON SMOOTH ANIMATION

function moveBlueDiv(direction) {
  const blueDiv = document.getElementById("blueDiv");
  if (direction === "left") {
    blueDiv.style.transform = "translateX(0)";
  } else if (direction === "right") {
    blueDiv.style.transform = "translateX(98%)";
  }
}

// ===== ACCORDION

const accordionItem = document.querySelectorAll(".accordionItem");
accordionItem.forEach((item) => {
  item.addEventListener("click", () => {
    const accordionActive = document.querySelector(".accordionItem.active");
    item.classList.toggle("active");
    accordionActive && accordionActive.classList.remove("active");
  });
});
