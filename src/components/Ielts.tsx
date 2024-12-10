"use client";
import carouselImgOne from "@/images/flexible-copy1.png";
import carouselImgTwo from "@/images/blackboard-copy1.png";
import carouselImgThree from "@/images/person-copy1.png";
import carouselImgFour from "@/images/lesson-copy-22.png";
import carouselImgFive from "@/images/expert-copy1.png";
import carouselImgSix from "@/images/receipt-copy1.png";

import React, { useEffect, useState, useRef } from "react";

// const Carousel = () => {
const images = [
    {
        heading: "Flexible Hours",
        src: `${carouselImgOne.src}`
    },
    {
        heading: "Modern Classrooms",
        src: `${carouselImgTwo.src}`
    },
    {
        heading: "Individual Attention",
        src: `${carouselImgThree.src}`
    },
    {
        heading: "Advanced Teaching",
        src: `${carouselImgFour.src}`
    },
    {
        heading: "Experience Faculty",
        src: `${carouselImgFive.src}`
    },
    {
        heading: "Affordable Fee",
        src: `${carouselImgSix.src}`
    }
];

// src/AutoLoopCarousel.tsx
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import GlobalHeading from "./GlobalHeading";

const Ielts: React.FC = () => {
    const emblaRef = useRef<HTMLDivElement>(null);
    const emblaApiRef = useRef<EmblaCarouselType | null>(null);

    useEffect(() => {
        if (emblaRef.current) {
            emblaApiRef.current = EmblaCarousel(emblaRef.current, { loop: true });

            const autoScroll = () => {
                if (emblaApiRef.current) {
                    const nextIndex = (emblaApiRef.current.selectedScrollSnap() + 1) % images.length; // Scroll by 2 slides
                    emblaApiRef.current.scrollTo(nextIndex);
                }
            };

            const interval = setInterval(autoScroll, 1000); // Change slide every 2 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, []);

    return (
        <main className="sm:my-16">
            <GlobalHeading topText="What We Offer" mainHeading="Learn IELTS At Go Global Consultants" bottomParagraph="Our expert IELTS preparation courses are made to provide all skills required to achieve your desired score. Learn practical tips for each section of your IELTS test with us." />
            <div className="bg-blue-600 sm:w-4/5 sm:mx-auto md:p-20 py-10 px-4 m-2 mx-4 rounded-md overflow-hidden">
                <div className="embla" ref={emblaRef} >
                    <div className="embla__container">
                        {
                            images.map((image, index) => (
                                <div className="embla__slide bg-white rounded-md" style={{ width: "calc(100%/3-16px)" }} key={index}>
                                    <div className="flex flex-col justify-center items-center py-4 px-2 gap-y-3">
                                        <img
                                            className=" h-10 w-auto"
                                            src={image.src}
                                            alt="carousel image"
                                        />
                                        <h3 className="text-md font-semibold text-blue-800">{image.heading}</h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </main>
    );
};

export default Ielts;