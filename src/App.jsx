import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import PassengerForm from "./components/PassengerForm";
import Bookings from "./components/Bookings";

function Navbar({ onNav, active }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white bg-opacity-10">
      <div className="flex items-center text-white font-bold text-lg">
        <span className="mr-2">🚆</span> RailwayGo
      </div>
      <div>
        <button className={`mr-6 text-white ${active === "search" ? "underline" : ""}`} onClick={() => onNav("search")}>Search Trains</button>
        <button className={`text-white ${active === "bookings" ? "underline" : ""}`} onClick={() => onNav("bookings")}>My Bookings</button>
      </div>
    </nav>
  );
}

export default function App() {
  const [page, setPage] = useState("search");
  const [search, setSearch] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [booking, setBooking] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      <Navbar onNav={setPage} active={page} />
      {page === "search" && !search && <SearchForm onSearch={s => { setSearch(s); setPage("results"); }} />}
      {page === "results" && search && !selectedTrain && (
        <SearchResults search={search} onBook={train => { setSelectedTrain(train); setPage("passenger"); }} />
      )}
      {page === "passenger" && selectedTrain && !booking && (
        <PassengerForm onConfirm={details => {
          setBooking({
            id: Math.floor(Math.random() * 1e15),
            ...details,
          });
          setPage("bookings");
        }} />
      )}
      {page === "bookings" && booking && (
        <Bookings booking={booking} onDelete={() => setBooking(null)} />
      )}
    </div>
  );
}