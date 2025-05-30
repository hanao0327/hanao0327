export default function AboutPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose lg:prose-xl">
        <p>
          This is a sample about us page. You can replace this with your
          company's information.
        </p>
        <h2>Our Mission</h2>
        <p>
          To provide high-quality services to our customers and make a positive
          impact on the world.
        </p>
        <h2>Our Team</h2>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Peter Jones - CFO</li>
        </ul>
      </div>
    </div>
  );
}
