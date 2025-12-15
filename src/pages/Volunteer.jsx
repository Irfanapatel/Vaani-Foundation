import heroImage from '../assets/Overview.jpg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

function VolunteerHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={heroImage}
          alt="Volunteer with us"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Join Our Volunteer Community
          </h1>
        </div>
      </div>
    </section>
  );
}

export default function Volunteer() {
  return (
    <div className="bg-white min-h-screen">
      <VolunteerHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main volunteer content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          MAKE A DIFFERENCE: VOLUNTEER WITH US
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600 uppercase">
          Join Our Mission to Create Positive Change
        </h2>

        <div className="mt-12">
          {/* Volunteer opportunities will be added here */}
        </div>
      </section>
    </div>
  );
}