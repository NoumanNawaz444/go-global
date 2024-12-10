import React from 'react';
import GlobalHeading from './GlobalHeading';
import { Globe, BookOpen, FileText, Award, Home, Briefcase } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Study Visa Assistance',
    description:
      'We provide expert guidance to help you navigate the complexities of study visa applications. From document preparation to interview coaching, our team ensures a smooth visa approval process.',
    icon: <Globe className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 2,
    title: 'University Admissions',
    description:
      'Our team assists you in selecting the best universities and courses based on your preferences, qualifications, and career goals. We handle the entire application process to ensure success.',
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: 'IELTS Preparation',
    description:
      'Get ready for your IELTS exams with our comprehensive preparation courses. We offer practice tests, personalized feedback, and strategies to improve your English proficiency.',
    icon: <FileText className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 4,
    title: 'Scholarship Guidance',
    description:
      'Discover funding opportunities with our scholarship advisory services. We help you identify the right scholarships and assist in crafting compelling applications for maximum success.',
    icon: <Award className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 5,
    title: 'Post-Arrival Support',
    description:
      'Our post-arrival services include airport pickup, accommodation assistance, and guidance on settling into your new environment. We’re here to make your transition seamless.',
    icon: <Home className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 6,
    title: 'Career Counseling',
    description:
      'Plan your future with our career counseling services. We help you align your education and skills with the best career opportunities available globally.',
    icon: <Briefcase className="w-10 h-10 text-blue-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
   <GlobalHeading topText='Our Services' mainHeading='Our Top-Notch Services' />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 gap-6 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start bg-white border border-gray-200 rounded-md p-6 text-start hover:scale-105 duration-200"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
