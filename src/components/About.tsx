import React from 'react';

const About = () => {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-blue-600 font-semibold text-base uppercase leading-relaxed">About Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-black text-3xl sm:text-5xl font-bold lg:text-start text-center">
                                        Your Partner in Study Abroad Success
                                    </h2>
                                    <p
                                        className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        At Go Global, we are dedicated to helping students achieve their dreams of studying abroad. 
                                        With personalized guidance and expert advice, we simplify the journey to ensure a seamless and successful experience.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Guiding Students Worldwide
                                        </p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">1000+ Students</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Successfully Enrolled in Top Institutions
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">50+ Universities</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Partnerships Across the Globe
                                        </p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">98% Success Rate</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Ensuring Students Achieve Their Goals
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="sm:w-fit w-full group px-3.5 py-3 px-5 bg-blue-800 hover:scale-95 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-200 ease-in-out justify-center items-center flex ">
                            <span
                                className="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                                Read More
                            </span>
                           
                        </button>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div
                            className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717742431.png" alt="About Us image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
