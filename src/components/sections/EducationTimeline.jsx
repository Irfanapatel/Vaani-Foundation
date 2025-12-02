import { useEffect, useRef, useState } from 'react'
import educationImg from '../../assets/journey/Education.png'
import environmentImg from '../../assets/journey/environment.png'
import healthImg from '../../assets/journey/health.jpg'
import trainingImg from '../../assets/journey/training.jpg'
import cricketImg from '../../assets/journey/cricket.png'

const timelineItems = [
  {
    year: 2021,
    title: 'Community Learning Hubs Launched',
    description:
      'Set up after-school learning hubs in rural communities to support children with homework, reading practice and playful learning activities.',
    image: educationImg,
    highlights: ['8 villages covered', '350+ children enrolled', 'Volunteer-led reading circles']
  },
  {
    year: 2022,
    title: 'School Health & Nutrition Drive',
    description:
      'Introduced basic health screening and nutrition awareness sessions in partner schools to keep children healthy and ready to learn.',
    image: healthImg,
    highlights: ['2,000+ children screened', 'Nutrition awareness sessions for parents', 'Health referral support']
  },
  {
    year: 2023,
    title: 'Green Schools Initiative',
    description:
      'Worked with students and teachers to create child‑led projects on waste segregation, tree plantation and water conservation.',
    image: environmentImg,
    highlights: ['25 green clubs formed', '1,500+ trees planted', 'Clean classroom campaigns']
  },
  {
    year: 2024,
    title: 'Digital Learning Labs',
    description:
      'Piloted digital learning spaces with tablets, curated content and trained facilitators to strengthen foundational literacy and numeracy.',
    image: trainingImg,
    highlights: ['10 digital labs set up', 'Interactive content in local languages', 'Regular assessments and mentoring']
  },
  {
    year: 2025,
    title: 'Sports & Life Skills for Learning',
    description:
      'Used sports and group play to build confidence, teamwork and resilience among children, linking play with classroom learning outcomes.',
    image: cricketImg,
    highlights: ['Weekly sports sessions', 'Mixed‑gender teams', 'Life skills integrated into play']
  }
]

function EducationTimeline() {
  const [activeYear, setActiveYear] = useState(timelineItems[timelineItems.length - 1].year)
  const itemRefs = useRef({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const year = Number(entry.target.getAttribute('data-year'))
            if (year) setActiveYear(year)
          }
        })
      },
      {
        root: itemRefs.current?.root || null,
        threshold: 0.5
      }
    )

    Object.values(itemRefs.current).forEach(el => {
      if (el && el !== itemRefs.current.root) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleYearClick = year => {
    setActiveYear(year)
    const target = itemRefs.current[year]
    const root = itemRefs.current.root
    if (target && root) {
      root.scrollTo({
        top: target.offsetTop - 24,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="w-full bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Education milestones
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800">
            Our Education Journey Over the Years
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
          {/* Left: years timeline */}
          <div className="md:w-48 flex-shrink-0 flex md:block items-center md:items-stretch justify-center">
            <div className="relative md:h-full flex md:block">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-2 border-dashed border-blue-200" />
              <div className="flex md:flex-col gap-4 md:gap-3 relative z-10">
                {timelineItems.map(item => {
                  const isActive = item.year === activeYear
                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => handleYearClick(item.year)}
                      className={`group flex items-center md:items-center gap-2 md:gap-3 text-sm md:text-base transition-all ${
                        isActive
                          ? 'text-blue-800 font-semibold scale-[1.03]'
                          : 'text-gray-500 hover:text-blue-600'
                      }`}
                    >
                      <span className="hidden md:inline-block w-16 text-right">{item.year}</span>
                      <span className="md:hidden">{item.year}</span>
                      <span
                        className={`w-3 h-3 rounded-full border-2 shadow-sm ${
                          isActive
                            ? 'bg-blue-600 border-blue-600 ring-4 ring-blue-200'
                            : 'bg-white border-blue-200 group-hover:border-blue-400 group-hover:bg-blue-50'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: scrollable content */}
          <div
            ref={el => {
              itemRefs.current.root = el
            }}
            className="flex-1 max-h-[560px] md:max-h-[640px] overflow-y-auto pr-2 md:pr-4 space-y-8 md:space-y-10 bg-white/70 backdrop-blur rounded-3xl border border-blue-50 shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6"
          >
            {timelineItems.map((item, index) => {
              const isActive = item.year === activeYear
              return (
                <article
                  key={item.year}
                  data-year={item.year}
                  ref={el => {
                    if (el) itemRefs.current[item.year] = el
                  }}
                  className={`bg-white rounded-2xl border overflow-hidden flex flex-col ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } gap-4 md:gap-6 transition-all duration-300 ${
                    isActive
                      ? 'border-blue-300 shadow-[0_18px_40px_rgba(59,130,246,0.25)] scale-[1.01]'
                      : 'border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className="md:w-1/2 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-[0.3em] text-blue-500 uppercase mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3">
                      {item.description}
                    </p>
                    {item.highlights && (
                      <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                        {item.highlights.map(point => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline


