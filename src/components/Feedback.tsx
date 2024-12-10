import React from "react";
import GlobalHeading from "./GlobalHeading";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Emily Thompson",
      handle: "@emilyt",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
      text: "Go Global made the entire study abroad process seamless. Their guidance and support were invaluable. I couldn't have done it without them!",
      hashtag: "#StudyAbroadMadeEasy",
    },
    {
      id: 2,
      name: "Michael Johnson",
      handle: "@michaelj",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
      text: "The counselors at Go Global are incredibly knowledgeable. They helped me choose the perfect university and handled my application efficiently.",
      hashtag: "#ExpertGuidance",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      handle: "@sophiam",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
      text: "Thanks to Go Global, I am now studying in my dream university. Their visa assistance service was top-notch!",
      hashtag: "#DreamUniversity",
    },
    {
      id: 4,
      name: "James Lee",
      handle: "@jameslee",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
      text: "Go Global truly cares about students. They made me feel confident and prepared every step of the way.",
      hashtag: "#ConfidenceBoost",
    },
    {
      id: 5,
      name: "Olivia Brown",
      handle: "@oliviab",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg",
      text: "From shortlisting universities to scholarship applications, Go Global provided all the help I needed to study abroad.",
      hashtag: "#CompleteSupport",
    },
    {
      id: 6,
      name: "Daniel Wilson",
      handle: "@danielw",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg",
      text: "I was overwhelmed with the admission process, but Go Global's team made it incredibly easy and stress-free for me.",
      hashtag: "#StressFree",
    },
    {
      id: 7,
      name: "Emma Davis",
      handle: "@emmad",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg",
      text: "Their expertise in international education is unmatched. Go Global is the best choice for anyone looking to study abroad.",
      hashtag: "#TopChoice",
    },
    {
      id: 8,
      name: "Liam Carter",
      handle: "@liamc",
      avatar:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg",
      text: "I am so thankful for Go Global's support. They were always available to answer my questions and guide me through the entire process.",
      hashtag: "#AlwaysAvailable",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <GlobalHeading mainHeading="What Our Students Say" bottomParagraph="Discover how Go Global has helped students achieve their study
            abroad dreams." />

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="overflow-hidden bg-white rounded-md"
            >
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src={feedback.avatar}
                    alt={feedback.name}
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      {feedback.name}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {feedback.handle}
                    </p>
                  </div>
                  <a
                    href="#"
                    title=""
                    className="inline-block text-sky-500"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    {feedback.text}
                    <span className="block text-sky-500">
                      {feedback.hashtag}
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
