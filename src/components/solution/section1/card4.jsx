const Cards4 = () => {
    const cards = [
        {
            heading: "RCM Software Implementation",
            description: "Implementing and optimizing software for billing and management",
            image: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
        },
        {
            heading: "Integration Services",
            description: "Connecting RCM systems with Electronic Health Records (EHR) and other healthcare IT systems.",
            image: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
        },
        {
            heading: "Data Analytics",
            description: "Using data for insights into revenue cycle performance and improvements.",
            image: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
        }
    ];

    return (
        <div className="flex flex-wrap  justify-center lg:flex-nowrap mt-10 ml-4 mr-4 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-1/4  md:m-4 lg:w-1/3 lg:m-2 lg:p-4  xl:w-1/3 flex-shrink-0 h-auto bg-white rounded-xl overflow-hidden shadow-md border border-gray-300 mb-4 p-4 sm:p-6 mx-2"
            >
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-16 lg:h-16"
                    src={card.icon} // Ensure card.icon is the URL to the icon image
                    alt="Icon"
                  />
                </div>
                <h2 className="text-base sm:text-lg md:text-xs lg:text-xl font-semibold ">{card.heading}</h2>
                <p className="mt-2 text-xs sm:text-sm md:text-xs lg:text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    );
}

export default Cards4;
