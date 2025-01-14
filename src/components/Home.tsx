import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing social icons
import Image from "next/image"


const Home = () => {
  return (
    <section
      id="home"
      className="bg-slate-100 h-fit lg:h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center py-[80px]" style={{ fontFamily: "Poppins, sans-serif" }}>
        {/* Left Side */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 ">
            Navigating
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-600">
            Collaborations
          </h1>
          <h5 className="font-bold text-lg">
            Exploring business development strategies in SaaS.
          </h5>
          <p className="text-lg text-slate-600">
            With a solid foundation in B2B sales, engagement automation, and account management, 
            a goal-oriented approach is applied to exploring innovative technological solutions for marketing and business challenges.
            Leveraging tools such as LinkedIn Sales Navigator, HubSpot, Salesforce, and AI enables driving lead generation, optimizing campaigns, 
            and delivering impactful results.
          </p>
          <div>
            <a href="#contact">
              <button className="bg-slate-600 text-white px-6 py-3 rounded-lg shadow hover:bg-slate-800">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/sneha-c-shaji/"
              className="text-slate-600 hover:text-slate-800"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/sneha2180"
              className="text-slate-600 hover:text-slate-800"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="w-72 h-72 bg-slate-600 relative overflow-hidden" style={{
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '30%',
            borderBottomLeftRadius: '40%',
            borderBottomRightRadius: '60%',
          }}>
            <Image
              src={"/assets/images/perfil.png"}
              alt="Description"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
