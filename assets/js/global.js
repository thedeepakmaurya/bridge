const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const tabElements = document.querySelectorAll("ul li.tab");
const tabImage = document.getElementById("tab-image");
const tabTitle = document.getElementById("tab-title");
const tabDesc = document.getElementById("tab-desc");
const tabButton = document.getElementById("tab-button");

const tabs = [
  {
    title: "Business Communities",
    desc: "At Bridge, we believe that true business growth comes from collaboration. Our Business Communities connect distributors, leaders, and entrepreneurs across multiple product labels — creating a vibrant ecosystem of learning, sharing, and collective success.",
    img: "assets/img/businesses.svg",
    btnText: "Join Now",
    btnLink: "#",
  },
  {
    title: "Structured Growth",
    desc: "Structured Growth programs at Bridge provide clear pathways and actionable steps for personal and business development, ensuring members can achieve their goals efficiently.",
    img: "assets/img/businesses.svg",
    btnText: "Learn More",
    btnLink: "#",
  },
  {
    title: "Leader-Driven Networking",
    desc: "Our Leader-Driven Networking sessions connect you directly with industry leaders, offering mentorship, guidance, and valuable networking opportunities to accelerate your business journey.",
    img: "assets/img/businesses.svg",
    btnText: "Explore Now",
    btnLink: "#",
  },
  {
    title: "Private & Secure",
    desc: "Bridge ensures that all networking and collaboration happens in a private and secure environment, giving members peace of mind while engaging with like-minded professionals.",
    img: "assets/img/businesses.svg",
    btnText: "Get Started",
    btnLink: "#",
  },
];

function updateTab(index) {
  const tabData = tabs[index];
  tabTitle.textContent = tabData.title;
  tabDesc.textContent = tabData.desc;
  tabImage.src = tabData.img;
  tabButton.textContent = tabData.btnText;
  tabButton.href = tabData.btnLink;

  tabElements.forEach((el) => el.classList.remove("active"));
  tabElements[index].classList.add("active");
}

tabElements.forEach((tab, index) => {
  tab.addEventListener("click", () => updateTab(index));
});

function handleAnimations() {
  if (window.innerWidth > 1007) {
    const elements = document.querySelectorAll("[data-animate]");
    if (elements.length > 0) {
      enterView({
        selector: "[data-animate]",
        offset: 0,
        enter: function (el) {
          el.classList.add("kmr-animate");
        },
        exit: function (el) {
          el.classList.remove("kmr-animate");
        },
      });
    }
  }
}

handleAnimations();

const overlay = document.querySelector(".overlay");
const menuModal = document.querySelector(".menu-modal");
const enquiryModal = document.querySelector(".enquiry-modal");

document.querySelectorAll(".open-menu").forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
    menuModal.classList.add("active");
    enquiryModal.classList.remove("active");
  });
});

document.querySelectorAll(".open-enquiry").forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
    enquiryModal.classList.add("active");
    menuModal.classList.remove("active");
  });
});

document.querySelectorAll(".close-overlay").forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("active");
    menuModal.classList.remove("active");
    enquiryModal.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  menuModal.classList.remove("active");
  enquiryModal.classList.remove("active");
});

menuModal.addEventListener("click", (e) => e.stopPropagation());
enquiryModal.addEventListener("click", (e) => e.stopPropagation());

document.querySelectorAll(".menu-modal a").forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    menuModal.classList.remove("active");
    enquiryModal.classList.remove("active");
  });
});

document.querySelectorAll(".menu-modal a").forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    menuModal.classList.remove("active");
    enquiryModal.classList.remove("active");
  });
});

(() => {
  const root = document.documentElement;

  function getHeaderHeight() {
    const raw = getComputedStyle(root).getPropertyValue("--headerheight") || "";
    const n = parseFloat(raw);
    return Number.isFinite(n) ? n : 0;
  }

  function getElementTop(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  function scrollToElement(el, offset = 0, smooth = true) {
    const top = Math.max(0, Math.round(getElementTop(el) - offset));
    window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
  }

  function scrollToHash() {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    let target = document.getElementById(id);
    if (!target) {
      try {
        target = document.querySelector(hash);
      } catch (e) {
        target = null;
      }
    }
    if (target) scrollToElement(target, getHeaderHeight(), true);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#" || href === "#!") return;

      const hash = href;
      const id = hash.slice(1);
      let target = document.getElementById(id);
      if (!target) {
        try {
          target = document.querySelector(hash);
        } catch (err) {
          target = null;
        }
      }
      if (!target) return;
      e.preventDefault();
      history.pushState(null, "", hash);
      scrollToElement(target, getHeaderHeight(), true);
    });

    scrollToHash();

    const params = new URLSearchParams(window.location.search);
    const s = params.get("scrollTo");
    if (s) {
      let selector = s;
      if (
        !selector.startsWith("#") &&
        !selector.startsWith(".") &&
        !selector.includes("[") &&
        !selector.includes(" ")
      ) {
        selector = "#" + selector;
      }
      let target = null;
      if (selector.startsWith("#"))
        target = document.getElementById(selector.slice(1));
      if (!target) {
        try {
          target = document.querySelector(selector);
        } catch (err) {
          target = null;
        }
      }
      if (target) scrollToElement(target, 80, true);
    }
  });

  window.addEventListener("hashchange", () => {
    scrollToHash();
    if (typeof closeModel === "function") closeModel();
  });
})();
