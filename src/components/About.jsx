import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        {/* Left Side - Intro */}
        <div className="md:w-1/2 space-y-6" >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Right Side - Experience & Education */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Experience & Education
          </h3>
          <div className="relative border-l-4 border-blue-600">
            {/* Timeline Item 1 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Front-End Developer
              </h4>
              <p className="text-gray-500 text-sm">[Company Name] | 2022 - Present</p>
              <p className="text-gray-600 mt-2">
                Developing responsive and interactive web applications using
                modern frameworks like React and Tailwind CSS.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Web Development Intern
              </h4>
              <p className="text-gray-500 text-sm">[Company Name] | 2021 - 2022</p>
              <p className="text-gray-600 mt-2">
                Gained hands-on experience building user-friendly websites and
                collaborating with teams to meet client requirements.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Bachelor of Computer Science
              </h4>
              <p className="text-gray-500 text-sm">[University Name] | 2016 - 2020</p>
              <p className="text-gray-600 mt-2">
                Studied advanced concepts of computer science, algorithms, and
                web technologies, laying a solid foundation for my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
