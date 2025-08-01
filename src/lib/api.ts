"use client";

import axios from 'axios';

const API_BASE = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights';

export async function searchFlights(params: Record<string, string | number>) {
  try {
    const response = await axios.get(API_BASE, {
      params,
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
    });

    console.log('FULL API RESPONSE:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Flight search error:', error?.response?.data, error?.response?.message);
    return { data: { itineraries: [] } };
  }
}