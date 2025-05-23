import React from "react";

const trains = [
  {
    name: "Rajdhani Express",
    time: "06:00 - 14:00",
    seats: 45,
    price: 1200,
  },
  {
    name: "Shatabdi Express",
    time: "08:30 - 16:30",
    seats: 32,
    price: 1500,
  },
  {
    name: "Duronto Express",
    time: "15:00 - 23:00",
    seats: 28,
    price: 1100,
  },
];

export default function SearchResults({ search, onBook }) {
  return (
    <div className="min-h-[70vh]">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold text-white mb-2">Search Results</h2>
        <p className="text-white mb-6">
          Showing trains from {search.from} to {search.to} on {search.date}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {trains.map((train, idx) => (
            <div key={idx} className="bg-white bg-opacity-10 p-4 rounded-lg text-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">{train.name}</h3>
                <div className="mb-2">🕒 {train.time}</div>
                <div className="mb-2">{train.seats} seats available</div>
                <div className="mb-2 font-bold">₹{train.price}</div>
              </div>
              <button className="mt-2 bg-blue-600 py-1 rounded hover:bg-blue-700" onClick={() => onBook(train)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}