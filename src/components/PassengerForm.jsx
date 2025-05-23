import React, { useState } from "react";

export default function PassengerForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Passenger Details</h2>
        <input className="mb-4 w-full p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input className="mb-4 w-full p-2 rounded" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
        <input className="mb-4 w-full p-2 rounded" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
        <input className="mb-4 w-full p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={() => onConfirm({ name, age, phone, email })}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}