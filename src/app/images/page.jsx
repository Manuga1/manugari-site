export default function Images() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/my-photo${i + 1}.jpeg`,
    alt: `Photo ${i + 1}`,
  }));

  return (
    <section className="py-12">
      {/* centered text */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Inspiration Gallery
        </h2>

        <p className="text-center text-gray-500 mb-8">
          A scattered shrine of snapshots, stories, and shiny stuff.
        </p>
      </div>

      {/* FULL-WIDTH breakout (works even inside max-w/container parents) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rounded-lg shadow-lg w-full h-auto transition hover:scale-[1.01]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
