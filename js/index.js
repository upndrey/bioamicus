$(document).ready(function(e) {
  // slick
  if ($(window).width() > 1200) {
    $('.slick').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    });
  } 
  else if ($(window).width() < 760) {
    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
  }
  else {
    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
  }

  //links
  let currentActiveLink = null;
  $(".bioLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".bioLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".bioLink";
    $(".bioLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#bio").offset().top
    }, 2000);
  });

  $(".needLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".needLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".needLink";
    $(".needLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#need").offset().top - 100
    }, 2000);
  });

  $(".buyLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".buyLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".buyLink";
    $(".buyLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#shop").offset().top - 100
    }, 2000);
  });

  $(".reviewsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".reviewsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".reviewsLink";
    $(".reviewsLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#reviews").offset().top
    }, 2000);
  });

  $(".questionsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".questionsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".questionsLink";
    $(".questionsLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#questions").offset().top - 100
    }, 2000);
  });


  // questions
  let questionsDom = document.querySelectorAll('.question__title');
  questionsDom.forEach((item) => {
    if (item.nextElementSibling.classList.contains("hidden")) {
      $(item.nextElementSibling).hide();
    }
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("hidden");
      if (!item.nextElementSibling.classList.contains("hidden")) {
        $(item.nextElementSibling).slideDown("slow");
      } else {
        $(item.nextElementSibling).slideUp("slow");
      }
      item.classList.toggle("active");
    });
  });

  // burger
  let burgerDom = document.querySelector(".burger");
  let mobileNavDom = document.querySelector(".mobileNav__wrapper");
  burgerDom.addEventListener("click", () => {
    burgerDom.classList.toggle("active");
    mobileNavDom.classList.toggle("hidden");
  });

  // usage
  let useLink1Dom = document.getElementById("useLink1");
  let use1Dom = document.getElementById("use1");
  let useLink2Dom = document.getElementById("useLink2");
  let use2Dom = document.getElementById("use2");

  useLink1Dom.addEventListener("click", () => {
    useLink1Dom.classList.toggle("active");
    use1Dom.classList.toggle("hidden");
  });
  
  useLink2Dom.addEventListener("click", () => {
    useLink2Dom.classList.toggle("active");
    use2Dom.classList.toggle("hidden");
  });
});
