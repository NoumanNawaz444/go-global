import uniImageOne from "@/images/Uni-Logos-10.png";
import uniImageTwo from "@/images/Uni-Logos-2-01.png";
import uniImageThree from "@/images/Uni-Logos-2-04-1.png";
import uniImageFour from "@/images/Uni-Logos-2-06-1.png";
import uniImageFive from "@/images/Uni-Logos-2-08-1.png";
import uniImageSix from "@/images/Uni-Logos-18-1.png";
import uniImageSeven from "@/images/Uni-Logos-20-1.png";
import uniImageEight from "@/images/Uni-Logos-25-1.png";
import uniImageNine from "@/images/Uni-Logos-3-01-1-1536x658.png";
import uniImageTen from "@/images/Uni-Logos-3-02-1536x658.png";
import uniImageEleven from "@/images/Uni-Logos-3-03-1536x658.png";
import uniImageTwelve from "@/images/Uni-Logos-3-04-1536x658.png";
import uniImage13 from "@/images/Uni-Logos-3-06-1536x659.png";
import uniImage14 from "@/images/Uni-Logos-3-07-1536x659.png";
import uniImage15 from "@/images/Uni-Logos-3-08-1536x659.png";
import uniImage16 from "@/images/Uni-Logos-3-11-1536x659.png";
import uniImage17 from "@/images/Uni-Logos-3-12-1536x659.png";
import uniImage18 from "@/images/Uni-Logos-3-13-1536x659.png";
import uniImage19 from "@/images/Uni-Logos-3-16-1536x659.png";
import uniImage20 from "@/images/Uni-Logos-3-17-1536x659.png";
import uniImage21 from "@/images/Uni-Logos-3-18-1536x659.png";
import uniImage22 from "@/images/Uni-Logos-3-23-1536x659.png";
import uniImage23 from "@/images/Artboard-1-copy-14-2.jpg";
import uniImage24 from "@/images/Artboard-1-copy-19-3.jpg";
import uniImage25 from "@/images/Artboard-1-copy-3-2.jpg";

import GlobalHeading from "./GlobalHeading";

const LogoCloud = () => {
  const images = [
    uniImageOne, uniImageTwo, uniImageThree, uniImageFour, uniImageFive,
    uniImageSix, uniImageSeven, uniImageEight, uniImageNine, uniImageTen,
    uniImageEleven, uniImageTwelve, uniImage13, uniImage14, uniImage15,
    uniImage16, uniImage17, uniImage18, uniImage19, uniImage20,
    uniImage21, uniImage22, uniImage23, uniImage24, uniImage25,
  ];


  return (
    <div className="px-4 py-8">
      <GlobalHeading topText="Universities" mainHeading="Our Global Partners" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-6 sm:w-4/5 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4  rounded-lg  saturate-50 hover:border border-black/10 hover:saturate-200 hover:scale-110 duration-200"
          >
            <img src={image.src} alt={`University Logo ${index + 1}`} className="h-auto w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
