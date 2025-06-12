export function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      current: "0.0.12",
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}