import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <section className="grid gap-10 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 mx-auto" id="home">
        <div className="max-w-2xl mx-auto">
          {/* Data Section */}
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
              Navigating{' '}
              <span className="text-blue-500">
                <br />
                Collaborations
              </span>
            </h1>
            <h3 className="text-xl">
              Exploring business development strategies in SaaS.
            </h3>
            <p className="text-gray-700">
              With a solid foundation in B2B sales, engagement automation, and
              account management, a goal-oriented approach is applied to exploring
              innovative technological solutions for marketing and business
              challenges. Leveraging tools such as LinkedIn Sales Navigator,
              HubSpot, Salesforce, and AI enables driving lead generation,
              optimizing campaigns, and delivering impactful results.
            </p>
            <a
              href="https://calendly.com/snehacshaji202/collaboration_discussion"
              className="text-left inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition w-auto"
            >
              Schedule a Call
            </a>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/sneha-c-shaji/"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/sneha2180"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}


        <div className="relative">
        <svg
          className="w-64 h-64 absolute right-0 bottom-0"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mask definition */}
          <defs>
            <mask id="mask0" maskUnits="userSpaceOnUse">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                fill="white" /* White defines visible areas */
              />
            </mask>
          </defs>

          {/* Image and blue background inside the masked shape */}
          <g mask="url(#mask0)">
            {/* Blue background filling the blob */}
            <rect
              x="0"
              y="0"
              width="479"
              height="467"
              className="fill-blue-500"
            />
            {/* Image over the blue background */}
            <image
              className="w-full h-auto"
              x="0"
              y="0"
              href="./assets/img/perfil.png"
            />
          </g>
        </svg>

        </div>
      </section>
    </div>
  );
};

export default Home;
