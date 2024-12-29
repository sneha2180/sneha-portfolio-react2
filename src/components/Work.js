import React from 'react';

const Work = () => {
  // List of work images and their links
  const workItems = [
    { imgSrc: 'assets/img/work1.jpg', alt: 'Work 1', link: '#' },
    { imgSrc: 'assets/img/work2.jpg', alt: 'Work 2', link: '#' },
    { imgSrc: 'assets/img/work3.jpg', alt: 'Work 3', link: '#' },
    { imgSrc: 'assets/img/work4.jpg', alt: 'Work 4', link: '#' },
    { imgSrc: 'assets/img/work5.jpg', alt: 'Work 5', link: '#' },
    { imgSrc: 'assets/img/work6.jpg', alt: 'Work 6', link: '#' },
  ];

  return (
    <section className="py-10" id="work">
      <h2 className="text-3xl font-bold text-center mb-8">Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {workItems.map((item, index) => (
          <a
            href={item.link}
            className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            key={index}
          >
            <img src={item.imgSrc} alt={item.alt} className="w-full h-full object-cover" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
