import FlightCard from "./FlightCard";

function FlightList() {
  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      departure: "Hyderabad",
      arrival: "Delhi",
      departureTime: "06:00 AM",
      arrivalTime: "08:30 AM",
      duration: "2h 30m",
      type: "Non-stop",
      price: 4500,
    },
    {
      id: 2,
      airline: "Air India",
      departure: "Hyderabad",
      arrival: "Mumbai",
      departureTime: "10:00 AM",
      arrivalTime: "11:45 AM",
      duration: "1h 45m",
      type: "Non-stop",
      price: 5200,
    },
    {
      id: 3,
      airline: "SpiceJet",
      departure: "Hyderabad",
      arrival: "Bangalore",
      departureTime: "02:00 PM",
      arrivalTime: "03:30 PM",
      duration: "1h 30m",
      type: "Non-stop",
      price: 3200,
    },
  ];

  return (
    <div>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default FlightList;