import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 flex flex-col items-center justify-center">
      {/* Section Heading */}
      <div className="container mx-auto px-4 max-w-2xl mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
          About
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 px-4 md:px-8 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            I am Sneha C Shaji
          </h2>
          <p className="text-slate-600 text-lg">
            I am Sneha C Shaji, a passionate individual with a background in Computer Science and Engineering. 
            I have experience in sales, marketing automation, and project coordination, 
            and I'm always looking for ways to combine technology with business. 
            I'm excited to explore new opportunities and grow in the tech industry.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 px-4 md:px-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Experience & Education
          </h3>
          <div className="relative border-l-4 border-slate-800">
            {/* Timeline Item 1 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-slate-800">
                International Sales Executive
              </h4>
              <p className="text-slate-500 text-sm">Dec 2024 - Present</p>
              <p className="text-slate-600 mt-2">
                Webdura Technologies, Kochi
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-slate-800">
                Business Development Executive
              </h4>
              <p className="text-slate-500 text-sm">Nov 2023 - Nov 2024</p>
              <p className="text-slate-600 mt-2">
                Softnotions Technologies, Thiruvananthapuram
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="ml-6 mb-10">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-2.5"></div>
              <h4 className="text-lg font-semibold text-slate-800">
                B.Tech in Computer Science and Engineering
              </h4>
              <p className="text-slate-500 text-sm">2020 - 2024</p>
              <p className="text-slate-600 mt-2">
                Jyothi Engineering College
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
