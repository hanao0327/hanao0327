export default function HomePage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Dormitory</h1>
      <p className="text-lg">
        Discover comfortable and affordable accommodations for your stay.
      </p>
      <div className="mt-8">
        <a
          href="/booking"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
