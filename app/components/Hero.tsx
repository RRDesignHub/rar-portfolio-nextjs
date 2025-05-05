import Link from "next/link";
import { Spotlight } from "./UI/Spotlight";
import Image from "next/image";
import selfImg from "@/public/hero-potriate.png"
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { TextGenerateEffect } from "./UI/TextGenerate";
import MagicButton from "./UI/MagicButton";

export const Hero = () => {
  return (
    <div className="hero-bg bg-no-repeat bg-cover max-sm:bg-contain md:bg-center overflow-hidden ">
      <div className="w-full overflow-hidden">
        <Spotlight
          className="-top-14 left-20 md:top-36 md:left-[50vw] h-screen"
          fill="pink"
        />
        <Spotlight
          className="-top-18 lg:top-10 left-32 lg:left-[50vw] h-[100vh] lg:h-[80vh] lg:w-[60vw]"
          fill="purple"
        />
        <Spotlight
          className="top-10 left-32 lg:top-40 lg:left-[550px] h-screen lg:h-[100vh] lg:w-[60vw] z-10"
          fill="white"
        />
      </div>
      <div className="md:w-11/12 mx-auto relative z-40 flex flex-row max-sm:flex-wrap justify-between items-center px-2 md:px-0">
        {/* Left Column */}
        <div className="w-1/2 md:w-5/12 relative">
          {/* Shape Text Block */}
          <div
            className="absolute top-16 lg:top-12 left-0 bg-light opacity-90 w-24 h-16 md:w-32 md:h-20 flex items-center justify-center rounded"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 75%, 30% 75%, 10.1% 100%, 10% 75%, 0% 75%)",
            }}
          >
            <h4 className="text-center text-dark text-sm font-semibold pb-4">
              Hey there,
              <br />I am
            </h4>
          </div>
          {/* Heading */}
          <div className="mt-32">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-heebo text-light font-bold ">
              <TextGenerateEffect words="RIPANUL ALAM" />
            </h1>
            <h3 className="max-sm:w-[190px] text-base md:text-xl font-nunito text-[hsl(263,94%,83%)] opacity-40 mt-2">
              Junior Frontend Developer | MERN Enthusiast
            </h3>
          </div>
          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex max-sm:flex-col md:items-center max-sm:w-fit gap-y-2 md:space-x-4">
            <a
              href="https://drive.google.com/file/d/125hDpjV4NzaIwiG1aRQIrzaVpoP9uEw9/view?usp=drive_link" // Provide the actual path to your resume PDF file
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 flex justify-center items-center text-center bg-gradient-to-r from-primary to-secondary text-light font-semibold rounded-xl hover:bg-gradient-to-l transition duration-300"
            >
              RESUME
            </a>
            <Link
              href="/skills"
            >
              <MagicButton title="MY SKILLS"/>
            </Link>
          </div>
          {/* Transparent Text Image */}
          <div className="mt-8">
            {/* <img
              src={transparentText2}
              alt="Transparent design text"
              className="w-full opacity-20"
            /> */}
          </div>
        </div>

        {/* Middle Column: Hero Image */}
        <div className="w-1/2 md:w-3/12 relative flex justify-end md:justify-center items-center md:mt-10 lg:mt-0">
          <div className="hero-img w-[160px] md:w-[240px]">
            <Image
              src={selfImg} 
              alt="Hero Portrait"
              className="w-full object-cover"
              priority 
            />
          </div>
        </div>

        {/* Right Column: Tagline and Social Icons */}
        <div className="lg:w-4/12 mt-10 lg:mt-0">
          <div className="tag-line">
            <h3 className="text-xl font-nunito md:text-2xl text-light font-bold">
              Explore my journey in design and development, blending creativity,
              precision, and passion for innovation.
            </h3>
          </div>
          <div className="mt-6">
            <h5 className="text-lg text-light font-semibold">
              Follow Me In:
            </h5>
            <ul className="flex space-x-4 mt-2">
              <li className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <a
                  href="https://www.facebook.com/rrdesignhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light "
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <a
                  href="https://www.twitter.com/RipanulR18324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light "
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <a
                  href="https://www.linkedin.com/in/ripanul-alam-ridoy-ab00652a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light "
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <a
                  href="https://github.com/RRDesignHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaGithub size={20} />
                </a>
              </li>
            </ul>
          </div>
          {/* Optionally, add another transparent text image if present in your design */}
          <div className="mt-8">
            {/* <img
              src={transparentText}
              alt="Transparent design text"
              className="w-full opacity-20"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
