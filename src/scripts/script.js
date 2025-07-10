

window.addEventListener("DOMContentLoaded",()=>{
  //loader
const loader = document.querySelector(".loader");
setTimeout(() => {
  loader.classList.add("hidden")
}, 3000);
//loader

  if(localStorage.getItem("theme")){
    if (
      localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }else{
    const preferColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark":"light";
    console.log(preferColorSchemeDark);
    if(preferColorSchemeDark === 'dark'){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  }

  //toggle_theme
const toggle_theme = document.querySelector("#toggle-theme");
toggle_theme.addEventListener("click",checkTheme);

function checkTheme(){
  const theme = localStorage.getItem("theme");
  if(theme === 'dark'){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light")
  }else{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
  //toggle_theme

//tabs_cart
let tabs = document.querySelectorAll("#tabs li");
let tabsContent = document.querySelectorAll(".content > div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {

    tabs.forEach((content) => {
      content.classList.remove("after:bg-main_digikala", "text-main_digikala");
    });

    tabsContent.forEach((content) => {
      content.classList.add("hidden","flex");
    });


    tabs[index].classList.add("after:bg-main_digikala", "text-main_digikala");
    tabsContent[index].classList.remove("hidden");
  });
});

//Nav_Menu
let timer;
let timers;

const list_categories = document.getElementById("list_categories");
const mega_menu = document.getElementById("mega_menu");
const menu_bg_dark = document.getElementById("menu_bg_dark");
const side_menu = document.querySelectorAll("#side_menu li");
const main_menu = document.querySelectorAll("#main_menu > div");

list_categories.addEventListener("mouseover", openMenu);
list_categories.addEventListener("mouseleave", closeMenu);
menu_bg_dark.addEventListener("mousemove", closeMenu);

side_menu.forEach((mainItem) => {
  mainItem.addEventListener("mouseover", () => {
    clearTimeout(timers);
    timers = setTimeout(() => {
      side_menu.forEach((hoveredItem) => {
        hoveredItem.classList.add("bg-slate-100");
        mainItem.classList.remove("bg-slate-100");
        hoveredItem.classList.remove("text-red-600")
        mainItem.classList.add("text-red-600");
        hoveredItem.classList.remove("border-b","border-t","border-slate-200")
        mainItem.classList.add("border-b","border-t","border-slate-200")
        side_menu[0].classList.remove("border-t")
      });
      main_menu.forEach((menu_item) => {
        if (
          mainItem.getAttribute("data-time") ===
          menu_item.getAttribute("data-time")
        ) {
          menu_item.classList.add("flex-col");
          menu_item.classList.remove("hidden");
        } else {
          menu_item.classList.add("hidden");
          menu_item.classList.remove("flex-col");
        }
      });
    }, 100);
  });
  mainItem.addEventListener("mouseleave", () => {
    clearTimeout(timers);
  });
});

function openMenu() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    mega_menu.classList.remove("hidden");
    mega_menu.classList.add("flex");
    document.body.style.overflow = "hidden";
  }, 300);
}
function closeMenu() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    mega_menu.classList.remove("flex");
    mega_menu.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 400);
}

//Footer
const more_text = document.querySelectorAll(".more_text");
const text_footer = document.querySelectorAll(".text_footer");

text_footer.forEach((tags) => {
  more_text.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        tags.children[0].classList.toggle("hidden");
        tags.children[2].classList.toggle("h-28");
        if (tags.children[0].classList.contains("hidden")) {
          btn.innerText = "بستن";
        } else {
          btn.innerText = "مشاهده بیشتر";
        }
      }
    });
  });
});








//cart_dropdown
const dropdownBtn = document.querySelector(".dropdownBtn")
const dropdownContent = document.querySelector(".dropdownContent")

dropdownBtn.addEventListener("click",()=>{
  dropdownContent.classList.toggle("hidden")
})
//cart_dropdown


//bottom_to_top_button
const scrollToTopBtns = document.querySelectorAll(".scrollToTop");
scrollToTopBtns.forEach((scrollToTopBtn)=>{
  scrollToTopBtn.addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
})
//bottom_to_top_button


 
})


