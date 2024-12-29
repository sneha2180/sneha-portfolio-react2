import React from 'react';

const Skills = () => {
  return (
    <div>
      {/* ===== SKILLS ===== */}
      <section className="skills section py-10" id="skills">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

        <div className="skills__container grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
            </p>
            
            {[
              { name: 'HTML5', icon: 'bx bxl-html5', percentage: '95%' },
              { name: 'CSS3', icon: 'bx bxl-css3', percentage: '85%' },
              { name: 'JavaScript', icon: 'bx bxl-javascript', percentage: '65%' },
              { name: 'UX/UI', icon: 'bx bxs-paint', percentage: '85%' },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center relative font-semibold p-4 mb-4 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <i className={`${skill.icon} text-3xl text-blue-600 mr-4`}></i>
                  <span className="text-lg">{skill.name}</span>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-blue-600 rounded-full"
                    style={{ width: skill.percentage }}
                  ></div>
                </div>
                <span className="text-blue-600 ml-4">{skill.percentage}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="assets/img/work3.jpg"
              alt="Work"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
