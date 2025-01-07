import React from "react";

const Skills = () => {
  return (
    <div>
      {/* First Section: Images and Bullet Points
      <section
        id="skills" className="py-20 bg-slate-50 flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 max-w-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
            What I Do
          </h2>
        </div>
      </section> */}

      {/* Second Section: Tiles for Each Alphabet (SALES HACK) */}
      <section
        id="skills"
        className="py-20 bg-slate-50 flex flex-col items-center justify-center"
      >
        {/* Section Heading with Tiles for Each Alphabet */}
        <div className="container mx-auto px-4 max-w-6xl mb-12 text-center">
          <div className="grid grid-cols-4 gap-8">
            {/* Tile for S */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">S</span>
              <img src="/assets/images/Salesforce.png" alt="Salesforce" className="mt-4 h-12" />
            </div>


            {/* Tile for A */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">A</span>
              <img src="/assets/images/Apollo.png" alt="Apollo.io" className="mt-4 h-8"/>
            </div>

            {/* Tile for L */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">L</span>
              <img src="/assets/images/Sn.png" alt="LinkedIn" className="mt-4 h-9"/>
            </div>

            {/* Tile for E */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">E</span>
              <div className="flex flex-row mt-4 space-x-4">
                <img src="/assets/images/Hubspot_Icon.png" alt="HubSpot" className="h-9"/>
                <img src="/assets/images/MailChimp.png" alt="MailChimp" className="h-11"/>
              </div>
            </div>


            {/* Tile for H */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">H</span>
              <img src="/assets/images/Hubspot.png" alt="Hubspot" className="mt-4 h-8"/>
            </div>

            {/* Tile for A */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">A</span>
              <img src="/assets/images/Asana.png" alt="Asana" className="mt-4 h-8"/>
            </div>

            {/* Tile for C */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">C</span>
              <img src="/assets/images/Marketo.png" alt="Marketo" className="mt-4 h-8"/>
            </div>

            {/* Tile for K */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">K</span>
              <img src="/assets/images/Power BI.png" alt="BI" className="mt-4 h-8"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;