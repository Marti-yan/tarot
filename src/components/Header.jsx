
import "./Header.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function Header() {
  return (
    <>
      <header>
        <Swiper
          style={{
            "--swiper-navigation-color": "#c90603",
            "--swiper-pagination-color": "#c90603",
          }}
          effect="fade"
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          parallax={true}
          // modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <a href="#sobre">
              <div
                slot="container-start"
                className="parallax-bg"
                id="prlx"
                style={{
                  "background-image": 'url("./cigana_principal.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Taro na Net
              </div>
            </a>

          </SwiperSlide>

          <SwiperSlide>
            <a href="">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./ANJOS-03.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./ciganos-dancing.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Slide 2
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </header>


    </>
  );
}

export default Header;
