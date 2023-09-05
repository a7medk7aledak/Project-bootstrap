let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});




// shalf list
let lis = document.querySelectorAll(".out-work .switcher li");
let imgs = document.querySelectorAll(".out-work .row .all");
lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((el)=>{
      el.classList.remove("active");
      el.classList.remove("rounded-pill");
      this.classList.add("active");
      this.classList.add("rounded-pill");
    })
  });
 
  li.addEventListener("click", function () {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  })
});

