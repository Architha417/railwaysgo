import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [from, setFrom] = useState("Chennai Central");
  const [to, setTo] = useState("Mangalore");
  const [date, setDate] = useState("2025-04-25");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome to RailwayGo</h2>
        <p className="mb-6 text-center text-white">Book your train tickets with ease and comfort</p>
        <input className="mb-4 w-full p-2 rounded" value={from} onChange={e => setFrom(e.target.value)} placeholder="From" />
        <input className="mb-4 w-full p-2 rounded" value={to} onChange={e => setTo(e.target.value)} placeholder="To" />
        <input className="mb-4 w-full p-2 rounded" type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={() => onSearch({ from, to, date })}>
          Search Trains
        </button>
      </div>
    </div>
  );
}