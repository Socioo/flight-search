"use client";

import { useState } from "react";

type Flight = {
  airline_name: string;
  price: number;
  departure_airport: string;
  arrival_airport: string;
  departure_time: string;
  arrival_time: string;
  number_of_stops: number;
};

type FiltersProps = {
  flights: Flight[];
  onFilter: (filters: {
    stops?: number;
    airlines?: string[];
    priceRange?: [number | null, number | null];
  }) => void;
};

export default function Filters({ flights, onFilter }: FiltersProps) {
  const [maxPrice, setMaxPrice] = useState<number | null>(100);

  const handleApplyFilter = () => {
    const filters: {
      priceRange?: [number | null, number | null];
    } = {};

    if (typeof maxPrice === "number") {
      filters.priceRange = [0, maxPrice];
    }

    onFilter(filters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-black mb-1">
          Max Price ($)
        </label>
        <input
          type="number"
          value={maxPrice ?? ""}
          onChange={(e) =>
            setMaxPrice(e.target.value ? parseInt(e.target.value) : null)
          }
          placeholder="Enter max price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black"
        />
      </div>

      <button
        onClick={handleApplyFilter}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Apply Filter
      </button>
    </div>
  );
}
