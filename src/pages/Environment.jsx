import heroImage from '../assets/environment/herosection.jpg';

function EnvironmentHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-600/50"></div>
        <img
          src={heroImage}
          alt="Environmental conservation"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}

export default function Environment() {
  return (
    <main className="min-h-screen bg-white">
      <EnvironmentHero />
      {/* Rest of your environment page content will go here */}
    </main>
  )
}