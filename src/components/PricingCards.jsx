const PricingCards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

            <div className="w-full hover:shadow-amber-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-center">
                <h2 className="text-2xl font-bold py-8">Basic Plan</h2>
                <p className="text-4xl sm:text-2xl font-bold">LKR 5000/month</p>
                <div className="font-medium">
                    <p className="py-2 border-b border-gray-100 mx-8 mt-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-100 mx-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-100 mx-8">Instagram Post</p>
                </div>
                <button className="bg-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get</button>
            </div>

            <div className="w-full hover:shadow-amber-100 bg-gray-50 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 text-center">
                <h2 className="text-2xl font-bold py-8">Stranded Plan</h2>
                <p className="text-4xl sm:text-2xl font-bold">LKR 5000/month</p>
                <div className="font-medium">
                    <p className="py-2 border-b border-gray-200 mx-8 mt-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-200 mx-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-200 mx-8">Instagram Post</p>
                </div>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#FFBF00]">Get</button>
            </div>

            <div className="w-full hover:shadow-amber-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-center">
                <h2 className="text-2xl font-bold py-8">Premium Plan</h2>
                <p className="text-4xl sm:text-2xl font-bold">LKR 5000/month</p>
                <div className="font-medium">
                    <p className="py-2 border-b border-gray-100 mx-8 mt-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-100 mx-8">Instagram Post</p>
                    <p className="py-2 border-b border-gray-100 mx-8">Instagram Post</p>
                </div>
                <button className="bg-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get</button>
            </div>
        </div>
    </div>
  )
}

export default PricingCards