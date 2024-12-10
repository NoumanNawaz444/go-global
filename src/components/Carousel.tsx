"use client";
import carouselImgOne from "@/images/1-168x300.webp";
import carouselImgTwo from "@/images/2-275x300.webp";
import carouselImgThree from "@/images/3-263x300.webp";
import carouselImgFour from "@/images/4.webp";
import carouselImgFive from "@/images/5-247x300.webp";
import carouselImgSix from "@/images/6.webp";
import carouselImgSeven from "@/images/7-150x150.webp";
import carouselImgEight from "@/images/8-278x300.webp";
import carouselImgNine from "@/images/9-283x300.webp";
import carouselImgTen from "@/images/10-300x231.webp";

import React, { useEffect, useState, useRef } from "react";

// const Carousel = () => {
const images = [
    `${carouselImgOne.src}`,
    `${carouselImgTwo.src}`,
    `${carouselImgThree.src}`,
    `${carouselImgFour.src}`,
    `${carouselImgFive.src}`,
    `${carouselImgSix.src}`,
    `${carouselImgSeven.src}`,
    `${carouselImgEight.src}`,
    `${carouselImgNine.src}`,
    `${carouselImgTen.src}`,
];

// src/AutoLoopCarousel.tsx
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import GlobalHeading from "./GlobalHeading";

const slides = [
    { id: 1, content: "Slide 1 Content" },
    { id: 2, content: "Slide 2 Content" },
    { id: 3, content: "Slide 3 Content" },
    { id: 4, content: "Slide 4 Content" },
    { id: 5, content: "Slide 5 Content" },
    { id: 6, content: "Slide 6 Content" },
    { id: 7, content: "Slide 7 Content" },
    { id: 8, content: "Slide 8 Content" },
    { id: 9, content: "Slide 9 Content" },
    { id: 10, content: "Slide 10 Content" },
];

const Carousel: React.FC = () => {
    const emblaRef = useRef<HTMLDivElement>(null);
    const emblaApiRef = useRef<EmblaCarouselType | null>(null);

    useEffect(() => {
        if (emblaRef.current) {
            emblaApiRef.current = EmblaCarousel(emblaRef.current, { loop: true });

            const autoScroll = () => {
                if (emblaApiRef.current) {
                    const nextIndex = (emblaApiRef.current.selectedScrollSnap() + 1) % slides.length; // Scroll by 2 slides
                    emblaApiRef.current.scrollTo(nextIndex);
                }
            };

            const interval = setInterval(autoScroll, 1000); // Change slide every 2 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, []);

    return (
       <main className="sm:my-16">
      <GlobalHeading mainHeading="Our Branches" />
         <div className="embla" ref={emblaRef} >
            <div className="embla__container">
                {
                    images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                className=" w-auto h-36"
                                src={image}
                                alt="carousel image"
                            />
                        </div>
                    ))
                }

            </div>
        </div>
       </main>
    );
};

export default Carousel;