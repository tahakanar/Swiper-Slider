$(() => {
  $.get("products.json").then(result => {
    itemCount = result.length;

    for (var i = 0; i < result.length; i++) {
      var jsonDate = result[i].publishTime;
      var date = new Date(parseInt(jsonDate));
      var year = date.toString().split(" ");
      var badgenew = "";
      if (year[3] == "2018") {
        $(".badge").addClass("badgenew");
        badgenew = "NEU";
      }

      var price_sale = result[i].price;
      var old_Price = result[i].oldPrice;
      var rate1 = "";
      var rate2 = "";
      var rate = "";
      rate = 100 - (price_sale / old_Price) * 100;
      rate1 = rate.toFixed(0);
      if (rate1 > 0 && rate1 < 100) {
        rate2 = "%" + rate1;
      }

      var product = `
      <div class="swiper-slide flex-grow-1">
        <div class="d-flex flex-column align-items-center p-2">
        <div class="discount">${rate2}</div>
        <div class="badge">${badgenew}</div>
            <img src=${result[i].imageS}>
            <b>${result[i].name}</b>
            <div class="text-secondary small flex-fill d-flex align-items-center">${
              (result[i].params.land ? result[i].params.land + " | " : "") +
              (result[i].params.region ? result[i].params.region + " | " : "") +
              (result[i].params.art ? result[i].params.art : "") +
              (result[i].params.rebsorte ? result[i].params.rebsorte : "")
            }</div>
            <div class="d-flex justify-items-center">
                <div class="priceText">${result[i].priceText}</div>
                <div class="text-secondary old-price">${
                  result[i].oldPriceText
                }</div>
            </div>
        <div class="basePrice">${result[i].params.basePrice}</div>
      </div>
    </div>
      `;

      $(".js-swiper-wrapper1").append(product);
      $(".js-swiper-wrapper2").append(product);
      $(".js-swiper-wrapper3").append(product);
    }
    const swiper = new Swiper(".js-swiper-container1", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: ".js-next",
        prevEl: ".js-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },

        640: {
          slidesPerView: 3,
        },

        900: {
          slidesPerView: 4,
        },

        1200: {
          slidesPerView: 5,
        },
      },
    });
    const swiper2 = new Swiper(".js-swiper-container2", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: ".js-next2",
        prevEl: ".js-prev2",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },

        640: {
          slidesPerView: 3,
        },

        900: {
          slidesPerView: 4,
        },

        1200: {
          slidesPerView: 5,
        },
      },
    });
    const swiper3 = new Swiper(".js-swiper-container3", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: ".js-next3",
        prevEl: ".js-prev3",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },

        640: {
          slidesPerView: 3,
        },

        900: {
          slidesPerView: 4,
        },

        1200: {
          slidesPerView: 5,
        },
      },
    });
  });

  var itemCount = 0;
  var slideIndex = 0;
});
