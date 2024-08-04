import Cards1 from "./card1";
import Cards2 from "./card2";
import Cards3 from "./card3";
import Cards4 from "./card4";
import Cards5 from "./card5";
const MyComp = () => {
    return (

        <div className="w-11/12 " style={{margin:"0 auto", marginTop:"200px"}}>
            {/* section-1 start */}
            <div className="flex flex-wrap lg:flex-nowrap mb-28">
                <div className="w-full lg:w-8/12 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
                        Optimize Your RCM with Comprehensive Solutions
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide mt-4 lg:mt-10 w-full lg:w-11/12">
                        Enhance patient and physician experiences with our comprehensive Revenue Cycle Management (RCM) solutions. By leveraging our advanced RCM software and services in a single, streamlined solution, you can optimize costs, focus more on patient care, boost productivity, ensure seamless information exchange, and improve your financial performance.
                    </h2>
                    <button className="mt-8 lg:mt-11 bg-blue-500 text-white py-3 text-lg sm:text-xl md:text-2xl px-8 sm:px-16 md:px-24 border-2 border-black rounded-full">
                        Schedule a Demo
                    </button>
                </div>
                <div className="w-full lg:w-4/12 flex items-center justify-center mt-10 lg:mt-0">
                    <div className="octagon overflow-hidden w-10/12 sm:w-8/12 lg:w-full max-h-full">
                        <img
                            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
                            alt="Dahlia Flower"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>



            {/* section-1 end */}

            {/* section-2 start */}
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-center mb-10 underline">OUR FEATURES</h1>
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">Billing and Accounts Receivable Management</h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-10">Billing and accounts receivable management involves overseeing the invoicing process and ensuring
                timely collection of payments owed to a business, crucial for maintaining financial health and cash flow</h2>

              <Cards1/>
            {/* section-2 end */}
              
            {/* section-3 start */}
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">Coding and Documentation</h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-10">Coding and documentation encompass the process of writing and organizing software instructions,
                alongside detailed explanations and records, essential for software development, maintenance, and
                understanding.</h2>
                <Cards2/>
            {/* section-3 end */}

            {/* section-4 start */}
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">Insurance and Payment Processing</h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-10">Insurance and payment processing involve handling claims and transactions related to insurance policies,
                ensuring accurate billing and timely reimbursement, crucial for both healthcare providers and
                policyholders</h2>
                <Cards3/>
            {/* section-4 end */}

            {/* section-5 start */}
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">Technology and Systems</h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-10">Practice management software (PMS) for medical practices includes tools like Epic Systems, Cerner,
                NextGen Healthcare, athenahealth, and Kareo. These systems streamline administrative tasks such as
                appointment scheduling, patient billing, electronic health records (EHR) management, and insurance
                claims processing, enhancing operational efficiency and patient care delivery in healthcare settings.</h2>
                <Cards4/>
            {/* section-5 end */}

            {/* section-6 start */}
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">Reporting and Analysis</h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-10">Reporting and analysis entail the process of gathering and interpreting data to create meaningful insights
                and communicate findings, crucial for informed decision-making and strategic planning across
                organizations and sectors.</h2>
                <Cards5/>
            {/* section-6 end */}


        </div>
        
    );
};

export default MyComp;