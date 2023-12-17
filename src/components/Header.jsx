import "./Header.css";
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
            <a href="/">
              <div
                slot="container-start"
                className="parallax-bg"
                id="prlx"
                style={{
                  "background-image": 'url("./slide/01.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Taro na Net
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/magia-dos-ciganos">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./slide/02.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Ciganos
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/banhos-e-ervas">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./slide/04.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Banhos e Ervas
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/cartomancia">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./slide/05.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Cartomancia
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/mensagem-das-velas">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./slide/06.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Mensagem das Velas
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="mesa-radionica">
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  "background-image": 'url("./pages/mesaRadionica/01.jpg")',
                }}
                data-swiper-parallax="-23%"
              ></div>
              <div className="title" data-swiper-parallax="-300">
                Mesa Radionica
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </header>
    </>
  );
}

export default Header;
