import React from 'react';
import './App.css';

const About = () => {
  return (
    <div>
      {/* ===== ABOUT ===== */}
      <section className="py-10" id="about">
        <h2 className="text-3xl font-bold text-center mb-8">About</h2>

        <div className="flex flex-col md:flex-row justify-between items-start px-6">
          <div className="md:flex-1 md:pr-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">I am Sneha C Shaji</h2>
            <p className="text-gray-600 leading-relaxed">
              I am Sneha C Shaji, a passionate individual with a background in Computer Science and Engineering. I have experience in sales, marketing automation, and project coordination, and I'm always looking for ways to combine technology with business. I'm excited to explore new opportunities and grow in the tech industry.
            </p>
          </div>

          <div className="md:flex-1 md:pl-6">
            {/* Timelines Container */}
            <div className="space-y-8">
              {/* Experience Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="relative border-l-4 border-blue-600 pl-6 space-y-6">
                  <div className="relative">
                    <img
                      src="/assets/img/Timeline Icon2.png"
                      alt="Role 2"
                      className="absolute -left-10 top-0 w-10 h-10 bg-white "
                    />
                    <h3 className="text-lg font-medium">International Sales Executive</h3>
                    <p className="text-sm text-gray-500">Dec 2024 - Present</p>
                    <p className="text-gray-600">Webdura Technologies</p>
                  </div>

                  <div className="relative">
                    <img
                      src="/assets/img/Timeline Icon2.png"
                      alt="Role 1"
                      className="absolute -left-6 top-0 w-10 h-10 bg-white border-4 border-blue-600"
                    />
                    <h3 className="text-lg font-medium">Business Development Executive</h3>
                    <p className="text-sm text-gray-500">Nov 2023 - Nov 2024</p>
                    <p className="text-gray-600">Softnotions Technologies</p>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="relative border-l-4 border-blue-600 pl-6">
                  <div className="relative">
                    <img
                      src="/assets/img/Timeline Icon1.png" alt="Graduation"
                      className="absolute -left-6 top-0 w-10 h-10 bg-white border-4 border-blue-600"
                    />
                    <h3 className="text-lg font-medium">B.Tech in Computer Science and Engineering</h3>
                    <p className="text-sm text-gray-500">2020 - 2024</p>
                    <p className="text-gray-600">Jyothi Engineering College</p>
                  </div>

                  {/* Add more education items here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
