import React from "react";

const events = [
  {
    title: "Sunday Worship",
    date: "Every Sunday - 9:00 AM",
    location: "Main Auditorium",
  },
  { title: "Bible Study", date: "Wednesdays - 7:00 PM", location: "Room B" },
  {
    title: "Youth Night",
    date: "Friday, July 19 - 6:00 PM",
    location: "Youth Hall",
  },
];

export default function Events() {
  return (
    <section className="mt-20 px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <ul className="space-y-8">
        {events.map((event, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">
              {event.date} · {event.location}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
