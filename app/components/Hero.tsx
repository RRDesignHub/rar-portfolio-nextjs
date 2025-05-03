import Link from "next/link";
import { Spotlight } from "./UI/Spotlight";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import bg from "@/public/bg_final_hero.png"
export const Hero = () => {
  return (
    <div className={`bg-[url('/bg_final_hero.png')] bg-cover bg-center`}>
      <div className="w-full overflow-auto">
        <Spotlight
          className="top-40 -left-10 md:top-80 md:-left-32 h-screen overflow-hidden"
          fill="pink"
        />
        <Spotlight
          className="top-10 left-[80vw] h-[80vh] w-[60vw] overflow-hidden"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-[420px] h-[90vh] w-[40vw] overflow-hidden"
          fill="white"
        />
      </div>
      <div className="w-11/12 mx-auto ps-2 ">
        <div className="flex flex-row max-sm:flex-wrap justify-between items-center">
          {/* Left Column */}
          <div className="w-1/2 md:w-5/12 relative">
            {/* Shape Text Block */}
            <div
              className="absolute top-16 lg:top-12 left-0 bg-[#e8dcfc] opacity-90 w-24 h-16 md:w-32 md:h-20 flex items-center justify-center rounded"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 75%, 30% 75%, 10.1% 100%, 10% 75%, 0% 75%)",
              }}
            >
              <h4 className="text-center text-dark text-md font-semibold pb-4">
                Hey there,
                <br />I am
              </h4>
            </div>
            {/* Heading */}
            <div className="mt-32">
              <h1 className="text-2xl md:text-5xl font-heebo text-[#e8dcfc] font-bold">
                RIPANUL ALAM
              </h1>
              <h3 className="max-sm:w-[190px] text-base md:text-xl font-nunito text-[hsl(262,100%,88%)] opacity-40 mt-2">
                Junior Frontend Developer | MERN Enthusiast
              </h3>
            </div>
            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex max-sm:flex-col max-sm:w-fit gap-y-2 md:space-x-4">
              <a
                href="https://drive.google.com/file/d/125hDpjV4NzaIwiG1aRQIrzaVpoP9uEw9/view?usp=drive_link" // Provide the actual path to your resume PDF file
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center bg-gradient-to-r from-[#6617cb] to-[#cb218e] text-[#e8dcfc] font-semibold rounded hover:bg-gradient-to-l transition duration-300"
              >
                RESUME
              </a>
              <Link
                href="/skills"
                className="px-4 py-2 text-center border border-[#e8dcfc] text-[#e8dcfc] font-semibold rounded hover:bg-[#e8dcfc] hover:text-[#0d030c] transition duration-300"
              >
                MY SKILLS
              </Link>
            </div>
          </div>

          {/* Middle Column: Hero Image */}
          <div className="w-1/2 md::w-3/12 relative flex justify-center items-center md:mt-10 lg:mt-0">
            <div className="hero-img ">
              <Image
                src="https://i.ibb.co/XZYd9HK4/hero-potriate.png"
                width={240}
                height={150} 
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                alt="Ripanul_Alam_Profile"
              />
            </div>
          </div>

          {/* Right Column: Tagline and Social Icons */}
          <div className="lg:w-4/12 mt-10 lg:mt-0">
            <div className="tag-line">
              <h3 className="text-xl font-nunito md:text-2xl text-[#e8dcfc] font-bold">
                Explore my journey in design and development, blending
                creativity, precision, and passion for innovation.
              </h3>
            </div>
            <div className="mt-6">
              <h5 className="text-lg text-[#e8dcfc] font-semibold">
                Follow Me In:
              </h5>
              <ul className="flex space-x-4 mt-2">
                <li className="bg-gradient-to-r from-[#6617cb] via-[#cb218e] to-[#6617cb] bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                  <a
                    href="https://www.facebook.com/rrdesignhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8dcfc] "
                  >
                    <FaFacebookF size={20} />
                  </a>
                </li>
                <li className="bg-gradient-to-r from-[#6617cb] via-[#cb218e] to-[#6617cb] bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                  <a
                    href="https://www.twitter.com/RipanulR18324"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8dcfc] "
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li className="bg-gradient-to-r from-[#6617cb] via-[#cb218e] to-[#6617cb] bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                  <a
                    href="https://www.linkedin.com/in/ripanul-alam-ridoy-ab00652a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8dcfc] "
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </li>
                <li className="bg-gradient-to-r from-[#6617cb] via-[#cb218e] to-[#6617cb] bg-[length:200%_100%] bg-[position:right_center] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                  <a
                    href="https://github.com/RRDesignHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8dcfc]"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
              </ul>
            </div>
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
    </div>
  );
};
