import React from 'react'
import "./testimonials.css"
import Avt1 from "../../assets/avatar1.jpg"
import Avt2 from "../../assets/avatar2.jpg"
import Avt3 from "../../assets/avatar3.jpg"
import Avt4 from "../../assets/avatar4.jpg"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
	{
	avatar: Avt1,
	name: 'Mike Dean',
	review: 'Working with Ibrham has been wonderful and awesome. He offers more than just technical service but advises you through the process.'
	},
	{
	avatar: Avt2,
	name: 'John Drew',
	review: 'Working with Ibrham has been wonderful and awesome. He offers more than just technical service but advises you through the process.'
	},
	{
	avatar: Avt3,
	name: 'Macus Ryan',
	review: 'Working with Ibrham has been wonderful and awesome. He offers more than just technical service but advises you through the process.'
	},
	{
	avatar: Avt4,
	name: 'Paul Scot',
	review: 'Working with Ibrham has been wonderful and awesome. He offers more than just technical service but advises you through the process.'
	},
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}      
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials