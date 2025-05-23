import React from "react";

export default function Bookings({ booking, onDelete }) {
  return (
    <div className="min-h-[70vh]">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold text-white mb-2">My Bookings</h2>
        <p className="text-white mb-6">Manage your train tickets</p>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg text-white flex justify-between items-center">
          <div>
            <div className="font-bold mb-2">Booking #{booking.id}</div>
            <div>Passenger: {booking.name}</div>
            <div>Age: {booking.age}</div>
            <div>Phone: {booking.phone}</div>
            <div>Email: {booking.email}</div>
          </div>
          <button className="text-red-400 text-2xl" onClick={onDelete}>×</button>
        </div>
      </div>
    </div>
  );
}