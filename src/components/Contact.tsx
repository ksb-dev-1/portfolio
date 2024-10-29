import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import FuzzyOverlay from "./FuzzyOverlay";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="relative w-screen flex justify-center bg-tertiary py-8 overflow-hidden"
    >
      <FuzzyOverlay />
      <div className="max-w-6xl w-full flex flex-col items-center justify-center px-4 lg:px-8">
        <h1 className="font-extrabold text-2xl sm:text-4xl mb-4">Contact</h1>
        <div className="flex items-center" aria-label="Contact email">
          <span className="text-lg sm:text-2xl mt-1">
            <IoMailOutline />
          </span>
          <p className="font-semibold text-lg sm:text-xl ml-2">
            babaleshwarkedar@gmail.com
          </p>
        </div>
        <div className="flex items-center mt-4" aria-label="Contact email">
          <span className="text-lg sm:text-2xl mt-1">
            <BsTelephone />
          </span>
          <p className="font-semibold text-md sm:text-lg ml-2">
            +91-6361579289
          </p>
        </div>
        <div className="flex items-center mt-4" aria-label="Contact email">
          <span className="text-lg sm:text-2xl mt-1">
            <IoLocationOutline />
          </span>
          <p className="font-semibold text-lg sm:text-xl ml-2">
            India, Karnataka, Bengalore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
