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
    btnLink: "#"
  },
  {
    title: "Structured Growth",
    desc: "Structured Growth programs at Bridge provide clear pathways and actionable steps for personal and business development, ensuring members can achieve their goals efficiently.",
    img: "assets/img/businesses.svg",
    btnText: "Learn More",
    btnLink: "#"
  },
  {
    title: "Leader-Driven Networking",
    desc: "Our Leader-Driven Networking sessions connect you directly with industry leaders, offering mentorship, guidance, and valuable networking opportunities to accelerate your business journey.",
    img: "assets/img/businesses.svg",
    btnText: "Explore Now",
    btnLink: "#"
  },
  {
    title: "Private & Secure",
    desc: "Bridge ensures that all networking and collaboration happens in a private and secure environment, giving members peace of mind while engaging with like-minded professionals.",
    img: "assets/img/businesses.svg",
    btnText: "Get Started",
    btnLink: "#"
  }
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