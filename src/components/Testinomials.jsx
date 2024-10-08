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
const Testinomials = () => {
  const testimonials_data = [
    {
      id: 1,
      name: "Brenda Novak",
      designation: "IT Development Manager",
      company: alight,
      company_name: "ALight Solution",
      message:
        "I have enjoyed working with Hari at Alight. He has been flexible with his time to work U.S. daytime hours when we were needing someone to be available. He has very good communication skills. He helped brainstorm and provide alternate suggestions when we were working through some unusual data situations. He is continuing to expand his knowledge and skills regularly.",
        linkedIn: "https://www.linkedin.com/in/harinath-g/details/recommendations/",
      pic: brenda,
    }
  ];
  return (
    <section
      id="testimonials"
      name="experience"
      className="w-full h-auto p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            <span>My </span> <span className="text-blue-400">Testimonials</span>
          </p>
        </div>
        <div className="font-Open_Sans relative  pb-20 items-center place-content-center">
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
              <SwiperSlide key={testimonial.id}>
                <div className="flex items-center justify-center flex-col px-20 pb-10 pt-4 w-full h-auto max-h-[500px] rounded-3xl">
                <a href={testimonial.linkedIn}>
                  <img
                    src={testimonial.pic}
                    alt="sds"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </a>
                  <p className="mt-2">{testimonial.message}</p>
                  <FaQuoteLeft className="mt-8" />
                  <div className="flex items-center justify-center flex-col mt-4">
                    <p>
                      <span>{testimonial.name}</span>
                      <span className="p-2 text-blue-600 font-extrabold">
                        |
                      </span>
                      <span>{testimonial.designation}</span>
                    </p>
                    <p>
                      
                        <img
                          src={testimonial.company}
                          alt={testimonial.company_name}
                          className="h-8 mt-1"
                        />
                    
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
