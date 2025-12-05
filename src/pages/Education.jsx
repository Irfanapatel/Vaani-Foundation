import heroImage from '../assets/education/herosection.png'
import { Timeline } from '../components/ui/timeline'
import aangarwadi1 from '../assets/education/aangarwadi1.png'
import aangarwadi2 from '../assets/education/aangarwadi2.png'
import aangarwadi3 from '../assets/education/aangarwadi3.png'
import aangarwadi4 from '../assets/education/aangarwadi4.png'
import uniform1 from '../assets/education/uniform1.jpeg'
import uniform2 from '../assets/education/uniform2.jpeg'
import uniform3 from '../assets/education/uniform3.jpeg'
import uniform4 from '../assets/education/uniform4.png'
import sweater1 from '../assets/education/sweater1.jpeg'
import sweater2 from '../assets/education/sweater2.jpeg'
import sweater3 from '../assets/education/sweater3.jpeg'
import sweater4 from '../assets/education/sweater4.jpeg'
import book1 from '../assets/education/book1.png'
import book2 from '../assets/education/book2.png'
import book3 from '../assets/education/book3.png'
import book4 from '../assets/education/book4.png'
import nutritionImg from '../assets/education/nuitrition.jpg'

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
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          DONATE FOR EDUCATION: GIVE EVERY CHILD THE CHANCE TO LEARN AND RISE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600 uppercase">
          LET US EMPOWER EVERY CHILD TO LEARN, GROW AND TRANSFORM THEIR FUTURE
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
          <p>
            Across many villages in India, thousands of children still struggle to access quality education due to poverty, lack of resources
            and limited learning opportunities. At Vaani Foundation, we believe that every child—regardless of their background—deserves the
            chance to study, dream and build a brighter future.
          </p>
          <p>
            Through our education initiatives, we work to ensure that children receive the support they need at every stage of their learning
            journey. From strengthening early childhood education to improving school readiness and academic performance, our efforts focus on
            building strong foundations that shape confident and capable learners.
          </p>
          <p>
            We support children with school supplies, reading materials, digital learning tools and academic guidance. Our programs also focus
            on creating safe and encouraging environments where children can learn without fear, stay motivated and complete their schooling
            with confidence.
          </p>
          <p>
            Over the years, Vaani Foundation has continued to introduce sustainable, community-driven education models that help bridge learning
            gaps and expand access to quality education in underserved areas. By collaborating with schools, teachers and parents, we ensure
            that no child is left behind.
          </p>
          <p>
            As we move forward, our goal is to help more children stay in school, learn better, and unlock opportunities that lead to meaningful
            futures. Together, we can build a stronger, more educated generation—one child at a time.
          </p>
        </div>
      </section>

      {/* Education Pillars Timeline */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-4 pb-8 md:pb-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Here are our key pillars of building a strong foundation for children
          </h2>
        </div>
        <Timeline
          data={[
            {
              title: "TV Installation in Anganwadis",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[aangarwadi1, aangarwadi2, aangarwadi3, aangarwadi4].map((img, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl shadow-lg group"
                      >
                        <img
                          src={img}
                          alt={`Anganwadi learning space ${idx + 1}`}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Early Learning Support</h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>
                      Installed televisions in Anganwadis to make early childhood education more interactive and engaging.
                      </p>
                      <p>
                      Children learn through age-appropriate videos, stories, songs, and educational content that improves attention and comprehension.
                      </p>
                      <p>
                      Introduces digital learning in rural classrooms, helping bridge the gap between traditional and modern teaching methods.
                      </p>
                      <p>
                      Supports cognitive development and creates a joyful, stimulating learning environment for young children.
                      </p>
                      <p>
                      Reflects our commitment to providing equal access to quality education for children in underserved communities.
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Uniform Distribution for School Children",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[uniform1, uniform2, uniform3, uniform4].map((img, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl shadow-lg group"
                      >
                        <img
                          src={img}
                          alt={`Uniform distribution ${idx + 1}`}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Learning Without Barriers</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Organized a dedicated uniform distribution drive for students in Lakhi Village, supporting families who struggle to afford basic school essentials.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Helped reduce financial pressure on parents by providing complete school uniforms at no cost.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Children gained renewed confidence and a sense of equality among classmates, improving their overall school experience.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Removed a key barrier to regular school attendance, allowing students to focus on learning and personal growth.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    This initiative reflects our foundation’s commitment to ensuring equal access to education for children in rural and underserved communities.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Sweater Distribution for Anganwadi Children",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[sweater1, sweater2, sweater3, sweater4].map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img
                          src={img}
                          alt={`Sweater distribution ${idx + 1}`}
                          className="w-full h-48 sm:h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Winter Care Support</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Distributed sweaters to Anganwadi students from low-income and underserved families across the district.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Ensured young children stay warm during winter months, reducing risks of colds, flu, and other seasonal illnesses.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Helped students attend Anganwadi centers regularly by protecting their health and comfort.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Provided essential winter care to children who lack access to warm clothing, supporting their well-being and early learning.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Strengthened community awareness about child health needs in rural and vulnerable areas.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Educational Books Provided to Children",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[book1, book2, book3, book4].map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                        <div className="aspect-[3/4] w-full bg-white p-2">
                          <img
                            src={img}
                            alt={`Book distribution ${idx + 1}`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Learning Material Support</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Distributed educational books to children in Rodh Village, helping bridge the gap for families who cannot afford learning materials.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                      Provided storybooks and academic books that encourage curiosity, imagination, and strong reading habits.
                      </p>
                      <p className='text-gray-700 leading-relaxed'>
                      Empowered students with resources that support their learning, boost confidence, and strengthen academic performance.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Helped create a positive learning environment within the community, motivating parents and children to value education.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Reinforced our commitment to ensuring that every child, regardless of background, has access to essential learning tools and opportunities.
                      </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Nutrition Support for School Children",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[nutritionImg].map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img
                          src={img}
                          alt={`Nutrition support ${idx + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Nutrition & Hygiene Support</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Provided steel plates and spoons to primary school students in the Bharuch district under the PM Nutrition initiative, ensuring hygienic and safe meal experiences.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                      Encouraged regular participation in the mid-day meal program by offering durable, clean, and child-friendly dining utensils.
                      </p>
                       <p className="text-gray-700 leading-relaxed">
                        Helped improve student health by reducing risks associated with using low-quality or unhygienic eating tools.
                       </p>
                       <p className="text-gray-700 leading-relaxed">
                        Supported children from economically disadvantaged backgrounds who lack access to basic utensils at home.
                       </p>
                        <p className="text-gray-700 leading-relaxed">
                         Promoted better nutrition, enhanced dignity during mealtime, and reinforced awareness of hygiene and healthy eating habits among young students.
                       </p>
                        <p className="text-gray-700 leading-relaxed">
                          Contributed to improved school attendance, participation, and overall well-being by strengthening mid-day meal efficiency and comfort.
                        </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>
    </div>
  )
}