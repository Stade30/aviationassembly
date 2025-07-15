import React from "react";

const ministries = [
  {
    title: "Children's Ministry",
    description: "Fun, faith-based learning for kids.",
  },
  {
    title: "Youth Ministry",
    description: "Empowering teens to grow in faith.",
  },
  {
    title: "Music Ministry",
    description: "Leading worship through song and praise.",
  },
  { title: "Outreach Ministry", description: "Serving the local community." },
];

export default function Ministries() {
  return (
    <section className="mt-20 px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Ministries</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className="p-6 border rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{ministry.title}</h2>
            <p className="text-gray-600 mt-2">{ministry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
