import"./assets/styles-bd389f1d.js";import{S as r}from"./assets/vendor-52062990.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("mobileMenuButton"),s=document.getElementById("mobileMenu"),e=document.body;t.addEventListener("click",function(){const o=s.classList.toggle("open");t.classList.toggle("open"),e.classList.toggle("no-scroll",o)})});new r(".swiper",{direction:"horizontal",loop:!0,spaceBetween:20,slidesPerView:3,breakpoints:{1440:{spaceBetween:70}}});const c=document.getElementById("mobileMenuButton"),n=document.getElementById("mobileMenu"),i=document.body,l=document.querySelector(".header-arrow-up");document.querySelectorAll("nav a").forEach(t=>{t.addEventListener("click",function(s){const e=this.getAttribute("href");if(e.startsWith("#")&&e.length>1){s.preventDefault();const o=document.querySelector(e);o&&(o.scrollIntoView({behavior:"smooth"}),n.classList.contains("open")&&(n.classList.remove("open"),c.classList.remove("open"),i.classList.remove("no-scroll")))}else n.classList.contains("open")&&(n.classList.remove("open"),c.classList.remove("open"),i.classList.remove("no-scroll"))})});document.addEventListener("scroll",()=>{l.classList.add("hide")});document.addEventListener("mousemove",()=>{l.classList.remove("hide")});
//# sourceMappingURL=commonHelpers.js.map
