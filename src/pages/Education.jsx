import heroImage from '../assets/education/herosection.png'

function EducationHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={heroImage}
          alt="Education banner"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      </div>
    </section>
  )
}

export default function Education() {
  return (
    <div className="bg-white min-h-screen">
      <EducationHero />

      {/* Main education content section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <p className="text-sm sm:text-base font-semibold tracking-[0.25em] text-gray-700 uppercase mb-3 text-center">
        DONATE FOR EDUCATION: GIVE EVERY CHILD THE CHANCE TO LEARN AND RISE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600 uppercase">
          LET US EMPOWER EVERY CHILD TO LEARN, GROW AND TRANSFORM THEIR FUTURE
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
          <p>
            Across many villages in India, thousands of children still struggle to access quality education due to poverty, lack of resources,
            and limited learning opportunities. At VAANI Foundation, we believe that every child—regardless of their background—deserves the
            chance to study, dream, and build a brighter future.
          </p>
          <p>
            Through our education initiatives, we work to ensure that children receive the support they need at every stage of their learning
            journey. From strengthening early childhood education to improving school readiness and academic performance, our efforts focus on
            building strong foundations that shape confident and capable learners.
          </p>
          <p>
            We support children with school supplies, reading materials, digital learning tools, and academic guidance. Our programs also focus
            on creating safe and encouraging environments where children can learn without fear, stay motivated, and complete their schooling
            with confidence.
          </p>
          <p>
            Over the years, VAANI Foundation has continued to introduce sustainable, community-driven education models that help bridge learning
            gaps and expand access to quality education in underserved areas. By collaborating with schools, teachers, and parents, we ensure
            that no child is left behind.
          </p>
          <p>
            As we move forward, our goal is to help more children stay in school, learn better, and unlock opportunities that lead to meaningful
            futures. Together, we can build a stronger, more educated generation—one child at a time.
          </p>
        </div>
      </section>

      {/* Pillars heading placeholder */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pb-16 md:pb-20 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Here are our key pillars of building a strong foundation for children
        </h2>
      </section>
    </div>
  )
}