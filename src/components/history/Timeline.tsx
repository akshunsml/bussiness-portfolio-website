import React from 'react';

const timelineEvents = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Started with a single excavator and a vision for excellence.',
  },
  {
    year: '2005',
    title: 'Major Expansion',
    description: 'Expanded fleet and obtained multiple industry certifications.',
  },
  {
    year: '2012',
    title: 'Commercial Division',
    description: 'Launched dedicated commercial excavation services.',
  },
  {
    year: '2020',
    title: 'Environmental Initiative',
    description: 'Implemented green excavation practices and sustainable solutions.',
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-white" id="history">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">
            Over two decades of excellence in excavation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-600"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-600">{event.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-900 mt-2">{event.title}</h4>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    </div>
                  )}
                </div>
                <div className="relative flex items-center justify-center w-8">
                  <div className="h-4 w-4 rounded-full bg-yellow-600 z-10"></div>
                </div>
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-600">{event.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-900 mt-2">{event.title}</h4>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;