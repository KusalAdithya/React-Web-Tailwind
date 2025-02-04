import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#FFBF00] font-bold">
            Social Media Marketing
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Social Media
          </h1>
          <p>
            A vibrant and modern social media marketing concept. A digital
            marketer working on a laptop, surrounded by floating social media
            icons (Facebook, Instagram, Twitter, LinkedIn, TikTok). Data charts,
            analytics graphs, and engagement metrics glowing around them. The
            background features a futuristic workspace with a neon-blue and
            purple aesthetic. The scene is dynamic, with a sense of motion,
            representing high engagement and viral content. Ultra-realistic
            lighting, professional design, and high-resolution details
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#FFBF00]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
