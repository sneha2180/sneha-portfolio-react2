import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div>
      {/* Second Section: Tiles for Each Alphabet (SALES HACK) */}
      <section
        id="skills"
        className="py-20 bg-slate-50 flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 max-w-2xl mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center">
            Skills
          </h2>
        </div>

        {/* Add margin-top to give 2 lines of space after the heading */}
        <div className="container mx-auto px-4 max-w-6xl mb-12 text-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Tile for S */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">S</span>
              <Image src="/assets/images/Salesforce.png" alt="Salesforce" className="mt-4 h-12" width={69} height={48}/>
            </div>

            {/* Tile for A */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">A</span>
              <Image src="/assets/images/Apollo.png" alt="Apollo.io" className="mt-4 h-8" width={129} height={32}/>
            </div>

            {/* Tile for L */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">L</span>
              <Image src="/assets/images/SN.png" alt="LinkedIn" className="mt-4 h-9" width={188} height={36}/>
            </div>

            {/* Tile for E */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">E</span>
              <div className="flex flex-row mt-4 space-x-4">
                <Image src="/assets/images/Hubspot_Icon.png" alt="HubSpot" className="h-9" width={35} height={36}/>
                <Image src="/assets/images/MailChimp.png" alt="MailChimp" className="h-11" width={79} height={44}/>
              </div>
            </div>

            {/* Tile for H */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">H</span>
              <Image src="/assets/images/Hubspot.png" alt="Hubspot" className="mt-4 h-8" width={110} height={32}/>
            </div>

            {/* Tile for A */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">A</span>
              <Image src="/assets/images/Asana.png" alt="Asana" className="mt-4 h-8" width={131} height={32}/>
            </div>

            {/* Tile for C */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">C</span>
              <Image src="/assets/images/Marketo.png" alt="Marketo" className="mt-4 h-8" width={118} height={32}/>
            </div>

            {/* Tile for K */}
            <div className="flex flex-col justify-center items-center p-6 border-2 border-slate-300 rounded-lg shadow-lg shadow-indigo-300/50">
              <span className="text-4xl font-semibold text-slate-700">K</span>
              <Image src="/assets/images/Power BI.png" alt="BI" className="mt-4 h-8" width={129} height={32}/>
            </div>
          </div>
        </div>

        {/* Add margin-bottom to give 2 lines of space after the tiles */}
        <div className="mt-8"></div>
      </section>
    </div>
  );
};

export default Skills;
