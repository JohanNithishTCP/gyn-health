"use client";
import React, { useState } from 'react';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/gynhealth/gynecology.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/obstetrics.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/infertility.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/breast_symptoms.webm",
];

export default function HeroBanner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent z-10"></div> */}
            </div>

            <div className="site-container relative z-20">
                <div className="max-w-2xl text-white">
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="500"
                        className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight drop-shadow-2xl text-shadow-7xl text-shadow-black"
                    >
                        Women for{" "}
                        <span className="text-primary-light">Women</span>
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="700"
                        className="text-[18px] md:text-[20px] opacity-90 leading-relaxed max-w-xl mb-10 font-medium text-shadow-5xl text-shadow-black"
                    >
                        Being able to give individual advice to women on a physical and emotional level is our passion! We would like to take care of you during all stages of your life: from adolescence, over the desire to have children, pregnancy, menopause to old age.
                    </p>
                    {/* <div data-aos="fade-up" data-aos-delay="900" className="flex gap-4">
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center gap-3 group shadow-xl shadow-black/20 border-none">
                            Book Appointment
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
