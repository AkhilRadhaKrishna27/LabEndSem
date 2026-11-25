function FlightCard({ flight }) {
  return (
    <div className="flight-card">
      <h2>{flight.airline}</h2>

      <div className="flight-info">
        <div>
          <h3>{flight.departure}</h3>
          <p>{flight.departureTime}</p>
        </div>

        <div>
          <p>{flight.duration}</p>
          <hr />
          <p>{flight.type}</p>
        </div>

        <div>
          <h3>{flight.arrival}</h3>
          <p>{flight.arrivalTime}</p>
        </div>
      </div>

      <h2 className="price">₹{flight.price}</h2>

      <button>Book Now</button>
    </div>
  );
}

export default FlightCard;