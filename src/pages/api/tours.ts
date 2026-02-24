import type { APIRoute } from 'astro';
import tours from '../../data/tours.json';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(tours), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
