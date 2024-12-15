import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const perfumes = [
  {
    id: 1,
    name: "Euforia Classic",
    image: "/perfume1.png",
    description: "النسخة الكلاسيكية الأصلية",
  },
  {
    id: 2,
    name: "Euforia Intense",
    image: "/perfume2.png",
    description: "تركيز مكثف للمناسبات المسائية",
  },
  {
    id: 3,
    name: "Euforia Light",
    image: "/perfume3.png",
    description: "نسخة خفيفة للاستخدام اليومي",
  },
];

export default function PerfumeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-luxury-dark/10 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-luxury-light"
        >
          مجموعة Euforia المميزة
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {perfumes.map((perfume) => (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="px-4"
              >
                <div className="bg-gradient-to-b from-luxury-dark/30 to-black/50 p-6 rounded-xl backdrop-blur-sm border border-luxury-light/20">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-48 h-48 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-luxury-light mb-2 text-center">
                    {perfume.name}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {perfume.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
