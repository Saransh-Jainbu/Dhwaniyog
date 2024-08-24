import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center ml-20 mr-20 mb-20">
      <div className="text-red-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      icon: "❤️",
      title: "Patient Log Management",
      description: "Manage and archive detailed patient logs, including medical history, checkups, and mental health records.",
    },
    {
      icon: "🩺",
      title: "Therapist and Student Allocation",
      description: "Allocate and track therapy cases with real-time updates.",
    },
    {
      icon: "📋",
      title: "Reports and Feedback",
      description: "Review, and provide feedback on daily and weekly progress reports for effective therapy management.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
