

// global varible
let timer = null;

// Scroll to section on link click
function scrollhandler(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth",
    });
}

// build the nav
const count = document.getElementsByTagName("section").length;
for (let i = 1; i <= count; i++) {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("section" + i));
    li.setAttribute("onclick", `scrollhandler('section'+${i})`);
    li.setAttribute("class", `section${i}`);
    ul.appendChild(li);
}
// all scroll related events
$(window).scroll(function () {
  // show nav when scrollling
  $(".navbar__menu").removeClass("non");
  clearTimeout(timer);

  //   hide nave on still
  timer = setTimeout(function () {
    $(".navbar__menu").addClass("non");
  }, 1500);
  const scrolltop = $(window).scrollTop();
// hide and show scroll butoon handler
  if (scrolltop > 300) {
    $(".scroll-btn").removeClass("non");
  } else {
    $(".scroll-btn").addClass("non");
  }

  // Set/unset sections as active...set/unset link as active
  $("section").each(function () {
    const top = $(this).offset().top;
    const section = $(this)[0].id;
    const li = $(`li.${section}`);

    if (top <= scrolltop + 300) {
      $("section").removeClass("active");
      $("li").removeClass("active-state");
      $(this).addClass("active");
      li.addClass("active-state");
    } else {
      li.removeClass("active-state");
      $(this).removeClass("active");
    }
  });
});

// smooth scrolling
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
});
