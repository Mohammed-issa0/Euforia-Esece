import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grediant from-gray-900 to-gray-950 bg">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/perfume-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-luxury-light via-luxury to-[#604292] bg-clip-text text-transparent">
              Euforia Esece
            </h1>
            <div className="h-1 w-32 mx-auto md:mr-0 md:ml-auto bg-gradient-to-r from-luxury-light via-luxury to-luxury-dark"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8 max-w-2xl mx-auto md:mr-0 text-[#bfa0dfe6]"
          >
            هل تبحث عن عطر يعبر عن شخصيتك؟
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-12 max-w-3xl mx-auto md:mr-0 text-gray-300"
          >
            {/* اكتشف العطر الذي يترك بصمة لا تُنسى في كل مكان تذهب إليه. */}
            {/* <br /> */}
            {/* <br /> */}
            العطر الذي يجمع بين الأناقة والفخامة ليمنحك حضورًا مميزًا لا يُقاوم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button>اطلبه الآن!</Button>
          </motion.div>
        </div>

        {/* <img src="./perfume1.png" className="w-[600px]" /> */}
      </div>
    </section>
  );
}
