$(document).ready(function () {
    $(".animate-btn").on("click", function () {
      $(this).text("Loading...");
      $(this).animate(
        { width: "200px", opacity: 0.8 },
        1000,
        function () {
          $(this).text("Learn More");
          $(this).css({ width: "", opacity: "" });
        }
      );
    });
    $(".nav-link").on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 50,
        },
        800
      );
    });
  });
  