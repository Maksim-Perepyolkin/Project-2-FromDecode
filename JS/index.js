$('.main-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });




  const aside = document.getElementById("aside")

  function openAside(){
      aside.classList.add("active")
  }

  function closeAside(){
    aside.classList.remove("active")
}