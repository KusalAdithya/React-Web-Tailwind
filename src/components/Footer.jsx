import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#FFBF00]">NextBit.</h1>
        <p className="py-3">
          In today&apos;s digital world, a strong social media presence is essential 
          for business success. Our expert marketing strategies help you
          increase engagement, grow your audience, and drive sales. From content
          creation to data-driven ad campaigns, we ensure your brand stands out
          across platforms like Facebook, Instagram, Twitter, and LinkedIn.
          Let&apos;s take your social media game to the next level—reach more
          customers and maximize your impact today!
        </p>
        {/* <div className="md:w-[75%] justify-between my-6">
          <a className="flex">
            <FaInstagram size={25} className="mb-2 me-3" />
            ig
          </a>
          <a className="flex">
            <MdEmail size={25} className="mb-2 me-3" />
            email
          </a>
        </div> */}
      </div>
      <div className="lg:col-span-2 lg:mt-15 flex justify-between lg:ms-5">
        <div>
        <a className="flex text-sm">
            <FaInstagram size={20} className="mb-2 me-3" />
            ig
          </a>
          <a className="flex text-sm">
            <MdEmail size={20} className="mb-2 me-3" />
            email
          </a>
        </div>

        <div>
            <h6 className="font-medium text-amber-200">Services</h6>
            <ul>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>

            </ul>
        </div>

        <div>
            <h6 className="font-medium text-amber-200">Copmpany</h6>
            <ul>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>
                <li className="py-2 text-sm">Services</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
