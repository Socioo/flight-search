"use client";

import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import FlightCard from '@/components/FlightCard';
import Filters from '@/components/Filters';
import { searchFlights } from '@/lib/api';

export default function HomePage() {
  type Flight = {
    airline_name: string;
    price: number;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    number_of_stops: number;
  };

  const [flights, setFlights] = useState<Flight[]>([]);
  const [filtered, setFiltered] = useState<Flight[]>([]);

  type SearchFlightsResponse = {
    data?: {
      itineraries?: Flight[];
    };
  };

  const handleSearch = async (params: any) => {
    const data = (await searchFlights(params)) as SearchFlightsResponse;
    const itineraries = data?.data?.itineraries?.length
      ? data.data.itineraries
      : [
          {
            airline_name: 'Delta',
            price: 280,
            departure_airport: 'JFK',
            arrival_airport: 'LAX',
            departure_time: '08:00',
            arrival_time: '11:15',
            number_of_stops: 0,
          },
        ];
    setFlights(itineraries);
    setFiltered(itineraries);
  };

  const handleFilter = (filters: { stops?: number; airlines?: string[]; priceRange?: [number | null, number | null] }) => {
    let result = [...flights];

    if (typeof filters.stops === 'number') {
      result = result.filter(f => f.number_of_stops === filters.stops);
    }

    if (Array.isArray(filters.airlines) && filters.airlines.length > 0) {
      result = result.filter(f => filters.airlines!.includes(f.airline_name));
    }

    if (
      Array.isArray(filters.priceRange) &&
      filters.priceRange[0] !== null &&
      filters.priceRange[1] !== null &&
      typeof filters.priceRange[0] === 'number' &&
      typeof filters.priceRange[1] === 'number'
    ) {
      result = result.filter(
        f =>
          f.price >= (filters.priceRange as [number, number])[0] &&
          f.price <= (filters.priceRange as [number, number])[1]
      );
    }

    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center py-10 px-4">
      <main className="w-full max-w-6xl">
        <h1 className="text-5xl font-Arial font-bold text-center text-blue mb-6">Flight Search</h1>

        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <SearchForm onSearch={handleSearch} />
        </div>

        {flights.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <Filters flights={flights} onFilter={handleFilter} />
            </div>

            <div className="col-span-1 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((flight, index) => (
                  <FlightCard key={index} flight={flight} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
