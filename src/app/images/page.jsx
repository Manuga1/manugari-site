export default function Images() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-semibold text-center mb-12">Inspiration Gallery</h2>
<p className="text-center text-gray-500 mb-8">
        A scattered shrine of snapshots, stories, and shiny stuff.
      </p>      
<div className="grid grid-cols-1 gap-6">
        <img
          src="/images/my-photo.png"
          alt="Drone view of downtown Iowa"
          className="rounded-lg shadow-lg object-cover w-full h-64"
        />
      </div>
    </section>
  );
}

