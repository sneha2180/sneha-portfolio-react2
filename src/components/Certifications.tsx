import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Fabric Analytics Engineer Associate",
      description: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/SNEHACSHAJI-6024/B3A6C5314EA7C2FC?sharingId=studentamb_293314",
    },
    {
      title: "Advanced Data Analytics",
      description: "Ey GDS",
      link: "https://drive.google.com/file/d/1cXp0cBSVT6i_3qCzrEn_4OxtQ88CXhMo/view?usp=sharing",
    },
    {
      title: "MS-AIO01 Artificial Intelligence",
      description: "Cognizant",
      link: "https://drive.google.com/file/d/1ivJeJhq-eCm0legYupWZxFcd9sfvF7ap/view?usp=drive_link", // add the actual link here
    },
    {
      title: "CEFR B2 English",
      description: "British Council",
      link: "https://englishscore.com/verify", // add the actual link here
    },
    {
      title: "B2B Sales Strategy",
      description: "Project Management Institute",
      link: "https://www.linkedin.com/learning/certificates/855a004a7f570047ef46abc0309fb880b3d8ae392e537edd6e717bff302a4736?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGkKdFE9jQtaKzG2p%2FShG3g%3D%3D", // add the actual link here
    },
    {
      title: "Marketing Tools: Automation",
      description: "LMSAFP",
      link: "https://www.linkedin.com/learning/certificates/6b2bd11bbb453103b968c9b654bdfdae7ac3a835fb3dbbd0f7d61b1c69d25729?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BZHLQaQIMTqinEJTTI%2B2G7w%3D%3D", // add the actual link here
    },
  ];

  return (
    <section
      id="Certifications"
      className="py-16 flex flex-col items-center"
    >
      
      {/* Section Heading */}
      <div className="container mx-auto px-4 max-w-2xl mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center">
          Certifications
        </h2>
      </div>

      {/* Grid Layout*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-200 p-12 rounded-lg shadow hover:shadow-lg transition border"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-slate-600 text-white px-4 py-2 rounded shadow hover:bg-slate-800 hover:text-white hover:border">
                View Certification
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
