import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/office-building.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Find Your Perfect Office Space</h1>
          <p className="mt-4 text-xl">Premium office spaces available for rent in prime locations</p>
          <Button className="mt-8" variant="primary" size="lg">Explore Properties</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 max-w-2xl">We provide premium office spaces for rent in prime locations. Our mission is to help businesses find the perfect office space that meets their needs and budget.</p>
          <img src="/images/about-us.jpg" alt="About Us" className="mt-8 w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Property Card */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="/images/property-1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Modern Office Space</h3>
              <p className="mt-2 text-gray-600">Located in the heart of the city, this modern office space offers all the amenities you need.</p>
              <Button className="mt-4" variant="secondary">View Details</Button>
            </div>
          </div>
          {/* Repeat similar blocks for other properties */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <div className="mt-8 max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full">Send Message</Button>
          </form>
          <div className="mt-8 text-center">
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@officerentals.com</p>
            <p>Address: 123 Office St, Business City, BC 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;