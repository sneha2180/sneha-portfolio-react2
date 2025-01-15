import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-200 flex flex-col items-center justify-center">
      {/* Section Heading
      <div className="container mx-auto px-4 max-w-2xl mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
          About
        </h2>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 px-4 md:px-8 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            I am Sneha C Shaji
          </h2>
          <p className="text-slate-600 text-base">
            A young woman pursuing a sales career in the IT servicing industry. 
            With a tech-graduate background, I began my journey as a 
            <a href="https://mvp.microsoft.com/studentambassadors" className="text-slate-400 hover:text-blue-800"> Microsoft Student Ambassador</a>, earning the 
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/" className="text-slate-400 hover:text-blue-800"> Microsoft Fabric Associate certification</a>.
             My community networking experiences with 
            <a href="https://tinkerhub.org" className="text-slate-400 hover:text-blue-800"> TinkerHub</a>, 
            <a href="https://www.linkedin.com/company/polygon-guild-kochi/" className="text-slate-400 hover:text-blue-800"> Polygon Guild </a>, 
            <a href="https://iedc.startupmission.in/" className="text-slate-400 hover:text-blue-800"> IEDC </a>, and 
            <a href="https://mulearn.org/" className="text-slate-400 hover:text-blue-800"> GTech MuLearn </a>
            played a pivotal role in securing my internship, which later turned into a permanent role at 
            <a href="https://www.softnotions.com/" className="text-slate-400 hover:text-blue-800"> Softnotions Technologies</a> (associated with GTech).</p>
            <p className="text-slate-600 text-base">
              In my role as a Business Development Executive (BDE), 
              I had the honor of achieving two significant milestones: 
              being among the Top 5 in the Persona Pageant by 
            <a href="https://www.quest-global.com/" className="text-slate-400 hover:text-blue-800"> Quest Global </a> 
            and being recognized as the Best Women Starter by 
            <a href="https://www.herkey.com/" className="text-slate-400 hover:text-blue-800"> HerKey</a>.
            </p>
            <p className="text-slate-600 text-base">
              Now, I am embarking on a new chapter with 
              <a href="https://www.webdura.in/" className="text-slate-400 hover:text-blue-800"> Webdura Technologies </a>, 
              driven by my passion for exploring the endless possibilities of technology in automating sales.
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
