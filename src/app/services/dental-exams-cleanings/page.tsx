import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Dental Exams & Cleanings",
};

const examTypes = [
  {
    title: "Comprehensive Examination",
    subtitle: "Thorough assessment of oral health",
    description: "Our comprehensive dental examinations include visual inspection of teeth and gums, bite analysis, oral cancer screening, and digital x-rays when needed. We take time to understand your medical history and address any concerns.",
    accommodations: [
      "Visual inspection of teeth and gums",
      "Digital x-rays with minimal radiation",
      "Oral cancer screening",
      "Bite analysis and jaw assessment"
    ],
    image: "/services/dental-exams-cleanings/close-up-dentist-using-instruments-min.jpg"
  },
  {
    title: "Professional Cleaning",
    subtitle: "Gentle removal of plaque and tartar",
    description: "Our professional cleanings use specialized techniques designed for sensitive patients. We gently remove plaque and tartar buildup while ensuring your comfort throughout the process.",
    accommodations: [
      "Gentle plaque and tartar removal",
      "Specialized techniques for sensitive patients",
      "Fluoride treatment options",
      "Polishing for smooth, clean teeth"
    ],
    image: "/services/dental-exams-cleanings/dentist-treats-min.jpg"
  },
  {
    title: "Preventive Care Planning",
    subtitle: "Personalized treatment recommendations",
    description: "Based on your examination findings, we develop a personalized preventive care plan that addresses your specific oral health needs and helps maintain optimal dental health.",
    accommodations: [
      "Personalized treatment recommendations",
      "Preventive care scheduling",
      "Oral hygiene education",
      "Diet and lifestyle guidance"
    ],
    image: "/services/dental-exams-cleanings/doctor-writing-clipboard-while-patient-lying-dental-bed-min.jpg"
  },
  {
    title: "Special Needs Accommodations",
    subtitle: "Comfortable care for all patients",
    description: "We provide specialized accommodations for patients with special needs, including extended appointment times, sensory-friendly environment, and personalized communication approaches.",
    accommodations: [
      "Extended appointment times",
      "Sensory-friendly environment",
      "Personalized communication",
      "Caregiver involvement and education"
    ],
    image: "/services/dental-exams-cleanings/female-patient-min.jpg"
  }
];

const benefits = [
  "Early detection of dental issues",
  "Prevention of gum disease and cavities",
  "Fresh breath and healthy smile",
  "Improved overall health",
  "Reduced need for extensive treatments",
  "Personalized care approach",
  "Comfortable, accessible environment",
  "Professional oral hygiene education"
];

export default function DentalExamsCleaningsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Dental Exams & Cleanings
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Comprehensive dental examinations and professional cleanings in an accessible environment 
                designed to accommodate patients with special needs and sensory sensitivities. We understand 
                that every patient is unique and provide personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Schedule Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/services/special-needs-dentistry" className="btn btn-outline btn-lg">
                  Learn more
                </Link>
              </div>
              <div className="card p-6 bg-teal-50 border-teal-200">
                <p className="text-teal-900 font-medium italic">
                  &ldquo;The team at Dr. Vaughan&apos;s office made my dental exam comfortable and stress-free. 
                  They took extra time to explain everything and made sure I felt at ease throughout the visit.&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>Michael R.</strong> - Patient (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/dental-exams-cleanings/Dental exams and Cleanings-min.JPG"
                  alt="Dental Exams & Cleanings - Comprehensive Care"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Comprehensive Preventive Care
                    </p>
                    <p className="text-teal-100 text-sm">
                      Professional • Gentle • Accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-10 lg:py-16">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to Preventive Care
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Regular dental exams and cleanings are the foundation of good oral health. Our practice 
              provides comprehensive preventive care in a comfortable, accessible environment designed 
              to meet the unique needs of every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our thorough examinations and professional cleanings help maintain optimal oral health 
                and detect issues early, preventing more extensive treatments down the road.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comfortable Environment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We create a comfortable, accessible environment that accommodates patients with special 
                needs and sensory sensitivities, ensuring everyone feels at ease during their visit.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personalized Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every patient receives personalized care tailored to their specific needs, comfort level, 
                and oral health goals, ensuring the best possible experience and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Types We Offer */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Exam & Cleaning Services
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We provide comprehensive dental examinations and professional cleanings designed to meet 
              the unique needs of every patient, including those with special needs.
            </p>
          </div>

          <div className="space-y-16">
            {examTypes.map((type, index) => (
              <div key={type.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card p-8 h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {type.subtitle}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-3">
                        {type.accommodations.map((accommodation, accIndex) => (
                          <li key={accIndex} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{accommodation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={type.image}
                      alt={`${type.title} - Dental care`}
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-10 lg:py-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Benefits of Regular Dental Care
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Regular dental exams and cleanings provide numerous benefits for your oral health 
                and overall well-being, helping prevent problems before they become serious.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn btn-primary btn-lg">
                Request a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-8">
              <div className="card p-8 bg-gradient-to-br from-teal-50 to-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preventive Care Focus
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our focus on preventive care helps maintain your oral health and catch issues early, 
                  reducing the need for more extensive treatments and ensuring your smile stays healthy.
                </p>
                <Link href="/services" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn more about our approach
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Special Needs Accommodations
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We provide specialized accommodations for patients with special needs, ensuring 
                  everyone can receive the preventive care they need in a comfortable environment.
                </p>
                <Link href="/services/special-needs-dentistry" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn more
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Position */}
      <section className="py-10 lg:py-16 bg-teal-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Expert Preventive Care in Nashville
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dr. Vaughan and our team are committed to providing comprehensive preventive dental care 
            in a comfortable, accessible environment. We take the time to understand each patient&apos;s 
            unique needs and provide personalized care that promotes long-term oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-teal-600 hover:bg-gray-100 btn-lg">
              Schedule Consultation
            </Link>
            <Link href="/about" className="btn border-2 border-white text-white hover:bg-white hover:text-teal-600 btn-lg bg-transparent">
              Learn more about Dr. Vaughan
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Schedule Your Exam?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait to take care of your oral health. Contact us today to schedule your 
            comprehensive dental examination and professional cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services/special-needs-dentistry" className="btn btn-outline btn-lg">
              Learn about special needs care
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How often should I get a dental exam and cleaning?
              </h3>
              <p className="text-gray-600">
                Most patients benefit from professional cleanings every six months. However, patients with
                special needs or certain medical conditions may require more frequent visits. Dr. Vaughan
                will recommend a schedule that best suits your individual needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What happens during a dental exam?
              </h3>
              <p className="text-gray-600">
                A comprehensive dental exam includes a visual inspection of your teeth and gums, bite analysis,
                oral cancer screening, and digital x-rays if needed. We&apos;ll also discuss your medical history
                and any concerns you may have about your oral health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you accommodate patients with special needs?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our practice specializes in providing dental care for patients with special needs,
                including those with intellectual and developmental disabilities. We offer a comfortable
                environment and take the time needed to ensure each patient feels at ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
