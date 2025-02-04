import { ReactTyped } from "react-typed";

const StartView = () => {
  return (
    <div className="text-white">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#FFBF00] font-bold p-2 uppercase">
          GROWING business WITH Digital Marketing
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
          Grow with NextBit.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-l font-bold py-4">
            Flexible services with
          </p>

          <ReactTyped
            className="md:text-4xl sm:text-2xl text-l font-bold text-[#ffbf0081] md:pl-4 pl-2"
            strings={[
              "Social Media Marketing",
              "Web Design and Hosting",
              "Graphic and Logo Design",
              "Brand Management",
              "Event Photography",
              "Video Editing",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your business analytics to increase revenue with us
        </p>
        <button className="bg-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StartView;
