const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-3">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
        <div className="ld:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your business?
          </h1>
          <p>Signup to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3 flex w-full rounded-md text-black bg-white" type="email" placeholder="Enter Email Address" />
                <button className="bg-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ml-0 sm:ml-3 md:ml-4 text-black">Notify Me</button>
            </div>
            <p>We care about the protection of your data. Read our <span className="text-[#FFBF00]">Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
