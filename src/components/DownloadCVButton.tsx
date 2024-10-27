import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";

const DownloadCVButton = () => {
  //   return (
  //     <div className="mt-6">
  //       <RevealAnimation>
  //         <div className="relative min-h-[66px] min-w-[176px]">
  //           <div className="absolute top-[10px] min-h-[56px] min-w-[166px] bg-[#1a233a]"></div>
  //           <motion.button
  //             className="z-10 absolute top-[10px] min-h-[56px] min-w-[166px] bg-primary text-[#1a233a] flex flex-col items-center justify-center font-bold"
  //             initial={{ x: 0, y: 0 }}
  //             whileHover={{ x: 10, y: -10 }}
  //             transition={{ duration: 0.1, ease: "linear" }}
  //           >
  //             Download CV
  //           </motion.button>
  //         </div>
  //       </RevealAnimation>
  //     </div>
  //   );
  return (
    <div className="mt-6">
      <RevealAnimation>
        <motion.button
          className="relative h-[56px] w-[166px] font-bold"
          transition={{ duration: 0.3, ease: "linear" }}
          initial="initial"
          whileHover="hovered"
        >
          <motion.div
            className="absolute top-0 left-[-166px] flex items-center h-[56px] w-[332px] text-secondary"
            variants={{
              initial: {
                x: 0,
              },
              hovered: {
                x: 166,
              },
            }}
            transition={{ duration: 0.15, ease: "linear" }}
          >
            <div className="h-[56px] w-[166px] flex flex-col items-center justify-center bg-white">
              Download CV
            </div>
            <div className="h-[56px] w-[166px] flex flex-col items-center justify-center bg-primary">
              Download CV
            </div>
          </motion.div>
        </motion.button>
      </RevealAnimation>
    </div>
  );
};

export default DownloadCVButton;
