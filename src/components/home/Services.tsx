import React from 'react';
import { Shovel, Mountain, Building, Trees } from 'lucide-react';

const services = [
  {
    icon: Shovel,
    title: 'Site Preparation',
    description: 'Comprehensive site preparation including grading, leveling, and soil testing.',
  },
  {
    icon: Mountain,
    title: 'Land Clearing',
    description: 'Professional land clearing services for construction and development projects.',
  },
  {
    icon: Building,
    title: 'Foundation Work',
    description: 'Expert foundation excavation and preparation for commercial and residential projects.',
  },
  {
    icon: Trees,
    title: 'Environmental Care',
    description: 'Environmentally conscious excavation practices with minimal impact.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive excavation solutions for all your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <service.icon className="h-12 w-12 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;