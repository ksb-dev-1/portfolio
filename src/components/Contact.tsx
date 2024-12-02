import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative border-b border-tertiary bg-secondary w-screen h-fit flex flex-col items-center justify-center py-[2rem] sm:py-[4rem] overflow-hidden"
    >
      {/* <FuzzyOverlay /> */}
      <h1 className="font-extrabold text-4xl capitalize mb-8">Get in touch</h1>

      <div className="max-w-6xl w-full grid lg:grid-cols-3 gap-4 px-4">
        <div className="relative flex items-center bg-tertiary p-4 overflow-hidden">
          {/* <FuzzyOverlay /> */}
          <div className="relative h-14 w-14 rounded-full bg-secondary">
            <MdOutlineMailOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-bold text-secondary">Email</span>
            <span className="">babaleshwarkedar@gmail.com</span>
          </div>
        </div>

        <div className="relative flex items-center bg-tertiary p-4 overflow-hidden">
          {/* <FuzzyOverlay /> */}
          <div className="relative h-14 w-14 rounded-full bg-secondary">
            <BsTelephone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-bold text-secondary">Phone</span>
            <span className="">+91-6361579289</span>
          </div>
        </div>

        <div className="relative flex items-center bg-tertiary p-4 overflow-hidden">
          {/* <FuzzyOverlay /> */}
          <div className="relative h-14 w-14 rounded-full bg-secondary">
            <IoLocationOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-bold text-secondary">Location</span>
            <span className="">Belagavi, Karnataka, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
