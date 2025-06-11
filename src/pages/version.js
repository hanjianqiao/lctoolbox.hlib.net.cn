export function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      current: "0.0.12",
    }),
  );
}