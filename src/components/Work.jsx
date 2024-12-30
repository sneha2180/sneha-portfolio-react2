import React from "react";

const Work = () => {
  const certifications = Array(6).fill({
    title: "Certification Title",
    description: "Brief description or details about the certification.",
  });

  return (
    <section
      id="work"
      className="py-16 flex flex-col items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Certifications
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-lg shadow hover:shadow-lg transition border"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-white  hover:text-blue-900 hover:border">
                View Certification
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
