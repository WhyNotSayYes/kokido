// $(".tooltip__img").on("click", function() {
//     $(".tooltip__item").toggle();
//   });
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

  let arr = ['round-open.png', 'round-close.png'],
    block = document.querySelector('.main-block__popup'),
    i = 0;
    block.onclick = boom;

    function boom() {
        block.style.backgroundImage = 'url(img/'+arr[i]+')';
        i++;

        if (i == arr.length) {
            i = 0;
        }
    };


