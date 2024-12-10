import React from "react";
import { Info, GraduationCap, CheckCircle, FileText, MessageCircle, BadgeCheck } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Get All Details",
      description:
        "Understand the process, requirements, and opportunities. We provide you with all the necessary details to make an informed decision about studying abroad.",
      icon: <Info className="w-16 h-16 text-blue-600" />,
    },
    {
      title: "University Selection",
      description:
        "Choose from a curated list of universities based on your academic goals, budget, and preferences. Our experts guide you to find the perfect match.",
      icon: <GraduationCap className="w-16 h-16 text-blue-600" />,
    },
    {
      title: "Meet Requirements",
      description:
        "We help you prepare and fulfill the specific academic and financial requirements needed to secure admission to your desired university.",
      icon: <CheckCircle className="w-16 h-16 text-blue-600" />,
    },
    {
      title: "Apply To University",
      description:
        "Submit your applications with confidence. Our team assists you in creating strong applications, including personal statements and necessary documents.",
      icon: <FileText className="w-16 h-16 text-blue-600" />,
    },
    {
      title: "Interview Preparation",
      description:
        "Ace your university interviews with our preparation sessions. We guide you on how to present yourself and answer questions effectively.",
      icon: <MessageCircle className="w-16 h-16 text-blue-600" />,
    },
    {
      title: "Visa Granted",
      description:
        "Once accepted, we help you with the visa application process, ensuring all paperwork is in order so you can embark on your academic journey abroad.",
      icon: <BadgeCheck className="w-16 h-16 text-blue-600" />,
    },
  ];

  return (
    <section className="py-10 bg-blue-600 sm:py-16 lg:py-24 md:rounded-tl-[350px]">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl sm:leading-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Our step-by-step process ensures a seamless experience for achieving your study abroad dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="px-7 py-9">
                <div className="flex items-center">
                  {step.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-6 text-base text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
