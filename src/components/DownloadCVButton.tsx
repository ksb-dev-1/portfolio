import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";
import { BsArrowDownShort } from "react-icons/bs";

const DownloadCVButton = () => {
  return (
    <div className="mt-6">
      <RevealAnimation>
        <motion.button
          className="relative h-[56px] w-[173.78px] rounded-[50px] overflow-hidden"
          transition={{ duration: 0.3, ease: "linear" }}
          initial="initial"
          whileHover="hovered"
        >
          <motion.div
            className="absolute top-0 left-[-173.78px] flex items-center h-[56px] w-[347.56px]"
            variants={{
              initial: {
                x: 0,
              },
              hovered: {
                x: 173.78,
              },
            }}
            transition={{ duration: 0.15, ease: "linear" }}
          >
            <div className="relative h-[56px] w-[173.78px] font-bold pl-4 pr-2 flex items-center justify-center bg-white text-secondary rounded-[50px]">
              Download CV
              <div className="relative h-[40px] w-[40px] flex items-center justify-center rounded-full bg-secondary ml-2">
                <motion.span
                  initial={{ y: -2 }}
                  animate={{ y: 2 }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.16,
                  }}
                  className="text-white text-2xl"
                >
                  <BsArrowDownShort />
                </motion.span>
              </div>
            </div>
            <div className="relative h-[56px] w-[173.78px] font-bold pl-4 pr-2 flex items-center justify-center bg-primary text-white rounded-[50px]">
              Download CV
              <div className="relative h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white ml-2">
                <motion.span
                  initial={{ y: -2 }}
                  animate={{ y: 2 }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.16,
                  }}
                  className="text-black text-2xl"
                >
                  <BsArrowDownShort />
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.button>
      </RevealAnimation>
    </div>
  );
};

export default DownloadCVButton;
