import React, { useState } from "react";
import NavBar from "../NavBar";
import "./css/OtherHome.css";
import img_ele_1 from "../image/imageone.jpg";
import img_ele_2 from "../image/imagetwo.jpg";
import img_p1 from "../image/p1.jpeg";
import img_p2 from "../image/p2.jpg";
import img_p3 from "../image/p3.jpeg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const MainHome = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <NavBar />--
      <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <div className="container content_1 p-0">
        <div className="row p-0">
          <div className="col-md-6 col-12 card_1">
            <div className="card">
              <img
                src="https://gahanacademy.gahanai.co.in/assets/images/landing_pg_imgs/adas.jpg"
                className="img-fluid card-img-top"
                style={{ height: "350px", width: "600px" }}
                alt="course_1 img"
              />
              <h5 className="card-title">this is first card</h5>
            </div>
          </div>

          <div className="col-md-6 col-12 card_1">
            <div className="card">
              <img
                src="https://gahanacademy.gahanai.co.in/assets/images/landing_pg_imgs/svd_img.jpg"
                className="img-fluid card-img-top"
                style={{ height: "350px", width: "600px" }}
                alt="electric image"
              />
              <h5 className="card-title">this is second card</h5>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide p-2 m-4 outer"
          data-bs-ride="carousel"
          data-bs-interval="500"
        >
          <div className="carousel-inner">
            <div class="carousel-item active">
              <img src={img_ele_1} className="d-block moving-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img_ele_2} className="d-block moving-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img_ele_1} className="d-block moving-img" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="row p-4 number">
          <div className="col-3 ">
            <div className="p-1 m-1">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={150} duration={4} delay={0} />
                )}
              </h1>
              <h5>STUDENTS</h5>
            </div>
          </div>

          <div className="col-3 ">
            <div className="p-1 m-1">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={2} duration={10} delay={0} />
                )}
              </h1>
              <h5>COURSES</h5>
            </div>
          </div>

          <div className="col-3 ">
            <div className="p-1 m-1">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={4} duration={10} delay={0} />
                )}
              </h1>
              <h5>INDUSTRY EXPERTS</h5>
            </div>
          </div>

          <div className="col-3 ">
            <div className="p-1 m-1">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={5} duration={10} delay={0} />
                )}
              </h1>
              <h5>CORPORATE CLIENTS</h5>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      {/* Content 2 */}
      <div className="content_2">{/* Content */}</div>
      {/* Carousel images */}
      <div className="container image">
        <div className="gallery">
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner gallery">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={img_p1}
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={img_p2}
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={img_p3}
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt="..."
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
              {/* Carousel items */}
            </div>
          </div>
        </div>
      </div>
      <div className="rights"></div>
    </>
  );
};

export default MainHome;
