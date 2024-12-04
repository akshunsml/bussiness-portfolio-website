import React from 'react';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'Safety Certification',
    issuer: 'National Safety Council',
    year: '2023',
    description: 'Highest level of safety standards and practices.',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    issuer: 'International Standards Organization',
    year: '2022',
    description: 'Quality management system certification.',
  },
  {
    icon: CheckCircle,
    title: 'Environmental Compliance',
    issuer: 'Environmental Protection Agency',
    year: '2023',
    description: 'Certified environmentally responsible practices.',
  },
  {
    icon: Star,
    title: 'Industry Excellence',
    issuer: 'Excavation Contractors Association',
    year: '2023',
    description: 'Recognition for outstanding service quality.',
  },
];

const CertificationsGrid = () => {
  return (
    <section className="py-20 bg-white" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-xl text-gray-600">
            Industry recognition of our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-yellow-600 transition-colors duration-200"
            >
              <cert.icon className="h-12 w-12 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {cert.title}
              </h3>
              <p className="text-yellow-600 text-center mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-center mb-4">Valid: {cert.year}</p>
              <p className="text-gray-600 text-center">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGrid;