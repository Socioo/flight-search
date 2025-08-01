export default function FlightCard({ flight }: { flight: any }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 mb-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-black">
          {flight.airline_name || 'Unknown Airline'}
        </h2>
        <span className="text-blue-600 font-bold text-xl">
          ${flight.price || '—'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-black">
        <div>
          <span className="font-medium">From:</span> {flight.departure_airport || '—'}
        </div>
        <div>
          <span className="font-medium">To:</span> {flight.arrival_airport || '—'}
        </div>
        <div>
          <span className="font-medium">Departure:</span> {flight.departure_time || '—'}
        </div>
        <div>
          <span className="font-medium">Arrival:</span> {flight.arrival_time || '—'}
        </div>
        <div>
          <span className="font-medium">Stops:</span> {flight.number_of_stops ?? 0}
        </div>
      </div>
    </div>
  );
}
