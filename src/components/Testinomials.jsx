import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//quotes icon
import { FaQuoteLeft } from "react-icons/fa";
import alight from "../assets/alight.png";
import brenda from "../assets/brenda.jpeg";
import chris from "../assets/chris.jpeg";
const Testinomials = () => {
  const testimonials_data = [
    {
      id: 1,
      name: "Brenda Novak",
      designation: "IT Portfolio Manager",
      company: alight,
      company_name: "ALight Solution",
      message:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magni ab nihil eaque voluptates iste ullam suscipit deserunt officia ad ducimus molestiae dolorem unde sapiente, minima adipisci magnam dolore perferendis",
      linkedIn: "https://www.linkedin.com/in/brenda-novak-0b12986/",
      pic: brenda,
    },
    {
      id: 2,
      name: "Chris Leyland",
      designation: "Systems Analyst",
      company: alight,
      company_name: "ALight Solution",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magni ab nihil eaque voluptates iste ullam suscipit deserunt officia ad ducimus molestiae dolorem unde sapiente, minima adipisci magnam dolore perferendis Lorem ipsum,",
      linkedIn: "https://www.linkedin.com/in/chris-leyland-50511721/",
      pic: chris,
    },
  ];
  return (
    <section
      id="testimonials"
      name="experience"
      className="w-full h-screen bg-slate-900 p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            Testimonials
          </p>
        </div>
        <div className=" text-slate-900 font-Open_Sans relative  pb-20 items-center place-content-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials_data.map((testimonial) => (
              <SwiperSlide>
                <div className="flex items-center justify-center flex-col bg-slate-100 px-20 pb-10 pt-4 w-full h-[400px] rounded-3xl">
                  <img
                    src={testimonial.pic}
                    alt="sds"
                    className="w-32 h-32 object-cover rounded-full"
                  />

                  <p className="mt-2">{testimonial.message}</p>
                  <FaQuoteLeft className="mt-8" />
                  <div className="flex items-center justify-center flex-col mt-4">
                    <p>
                      <span>{testimonial.name}</span>
                      <span className="p-2 text-blue-600 font-bold">|</span>
                      <span>{testimonial.designation}</span>
                    </p>
                    <p>
                      <a href={testimonial.linkedIn}>
                        <img
                          src={testimonial.company}
                          alt={testimonial.company_name}
                          className="h-8 mt-1"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
