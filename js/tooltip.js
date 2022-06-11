document.addEventListener("click", function(e) {
    let m = document.getElementById('tooltip__item_1');
    if (e.target.id != 'tooltip__img_1' && e.target.id != 'tooltip__item_1') {
      m.style.opacity = '0';
    } else if (e.target.id == 'tooltip__img_1') {
      m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
  });
  document.addEventListener("click", function(e) {
    let m = document.getElementById('tooltip__item_2');
    if (e.target.id != 'tooltip__img_2' && e.target.id != 'tooltip__item_2') {
      m.style.opacity = '0';
    } else if (e.target.id == 'tooltip__img_2') {
      m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
  });
  document.addEventListener("click", function(e) {
    let m = document.getElementById('tooltip__item_3');
    if (e.target.id != 'tooltip__img_3' && e.target.id != 'tooltip__item_3') {
      m.style.opacity = '0';
    } else if (e.target.id == 'tooltip__img_3') {
      m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
  });

  //
  $(".main-block__popup").click(function(){
    $(this).toggleClass("active")  ; 
   })

  //
  // let animate = function() {
  //   $(".main-block__popup").animate({
  //       transform: "scale(1)"
  //     }, 1000).animate({
  //       transform: "scale(1.2)"
  //     }, 1000);
  // };
  // animate();
  // window.intervalId = setInterval(animate, 2000);
  
  // $('.main-block__popup').on('click', function(){
  //     $(".main-block__popup").finish(true, false);
  //     clearInterval(window.intervalId);
  // });

