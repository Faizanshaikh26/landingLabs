import React from "react";

export default function Features() {
    return (
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 text-[#EAEAEA] ">
            <div className="text-center mb-10">
                <h2 className="text-4xl tracking-tight font-bold  text-[#E82561] ">
                    Industries <span className="text-[#EAEAEA]">We Serve</span>
                </h2>
                <p className="mt-4 text-4xl text-[#CFFFE2]">

                    <span className="text-[#EAEAEA]">From startups to established brands,</span>
                    we fuel growth in:</p>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                    <img
                        className="w-1/2 md:w-full mx-auto"
                        src="https://landinglabs.in/wp-content/uploads/2025/07/POSTER-LL.png.webp"
                        alt="can_help_banner"
                    />
                </div>

                {/* Feature grid */}
                <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                    {/* Tech & SaaS */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561] border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Tech & SaaS</h3>
                            <p className="text-sm">
                                From MVP to scale-up, we craft launch strategies, product
                                positioning, and full-stack growth systems.
                            </p>
                        </div>
                    </div>

                    {/* E‑commerce */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561]  border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">E‑commerce</h3>
                            <p className="text-sm">
                                We build fast-loading stores, conversion funnels, and marketing
                                campaigns that turn browsers into buyers.
                            </p>
                        </div>
                    </div>

                    {/* Personal Brands */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561]  border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Personal Brands</h3>
                            <p className="text-sm">
                                We package your personality into a high-converting brand—from
                                social content to monetization funnels.
                            </p>
                        </div>
                    </div>

                    {/* Healthcare & Wellness */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561]  border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Healthcare & Wellness</h3>
                            <p className="text-sm">
                                Helping clinics, coaches, and wellness brands connect with
                                audiences through clean design and authentic messaging.
                            </p>
                        </div>
                    </div>

                    {/* E-Learning Platform */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561]  border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">E-Learning Platform</h3>
                            <p className="text-sm">
                                Building digital classrooms, course platforms, and lead gen
                                strategies that drive enrollments and engagement.
                            </p>
                        </div>
                    </div>

                    {/* Service-Based */}
                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-[#E82561]  border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Service-Based</h3>
                            <p className="text-sm">
                                From real estate to consulting, we help service border-[#E82561]
                                with premium web presence and local SEO.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
