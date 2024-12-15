import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "كل مرة أضع فيها العطر، يسألني الناس عنه. رائحته ساحرة!",
    author: "سارة",
    age: "28 سنة",
    rating: 5,
  },
  {
    text: "أفضل عطر جربته على الإطلاق، يجمع بين الفخامة والثبات الطويل.",
    author: "أحمد",
    age: "35 سنة",
    rating: 5,
  },
  {
    text: "هدية مثالية لزوجتي، كانت سعيدة جدًا به.",
    author: "يوسف",
    age: "40 سنة",
    rating: 5,
  },
  {
    text: "أستخدمه في كل مناسبة خاصة، ولا يمكنني الاستغناء عنه.",
    author: "ليلى",
    age: "32 سنة",
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    arrows: false,
    cssEase: "linear",
    appendDots: (dots) => (
      <div className="relative bottom-[-20px]">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-luxury-dark hover:bg-luxury transition-colors duration-300" />
    ),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-luxury-dark/10 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-luxury-light"
        >
          تجارب عملائنا
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="focus:outline-none px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative mx-auto max-w-2xl"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-luxury-light to-luxury rounded-2xl blur opacity-30"></div>

                    {/* Content */}
                    <div className="relative bg-black/80 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-luxury/20">
                      <div className="text-luxury-light text-4xl mb-8 flex justify-center">
                        <FaQuoteRight />
                      </div>

                      <p className="text-xl md:text-2xl text-center mb-8 text-gray-300 leading-relaxed">
                        {testimonial.text}
                      </p>

                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-luxury mx-1 text-xl"
                          />
                        ))}
                      </div>

                      <div className="text-center">
                        <p className="text-xl font-bold text-luxury-light mb-2">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-400">{testimonial.age}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
