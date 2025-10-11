import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Special Needs Dentistry",
};

const patientTypes = [
  {
    title: "Patients with Neurodivergence",
    subtitle: "Autism, ADHD, and other neurodivergent conditions",
    description: "We provide specialized care for patients with autism spectrum disorders, ADHD, and other neurodivergent conditions. Our sensory-friendly environment and patient-centered approach ensure comfort and successful treatment outcomes.",
    accommodations: [
      "Sensory-friendly environment with reduced stimuli",
      "Flexible appointment scheduling and extended time",
      "Visual aids and social stories for preparation",
      "Specialized communication strategies"
    ],
    image: "/services/Special Needs Dentistry page/cheerful-kid-min.jpg"
  },
  {
    title: "Patients with Mental Challenges",
    subtitle: "Intellectual and developmental disabilities",
    description: "Our practice specializes in caring for individuals with intellectual and developmental disabilities. We believe all individuals deserve the same standards of oral health care.",
    accommodations: [
      "Person-centered treatment planning",
      "Behavioral management techniques",
      "Caregiver involvement and education",
      "Simplified communication methods"
    ],
    image: "/services/Special Needs Dentistry page/medical-nurse-min.jpg"
  },
  {
    title: "Patients with Physical Challenges",
    subtitle: "Mobility impairments and physical disabilities",
    description: "We have a hoyer-lift to transfer patients with mobility difficulties into the dental chair. Our facility is fully accessible and designed to accommodate patients with various physical challenges.",
    accommodations: [
      "Hoyer lift for safe patient transfers",
      "Wheelchair accessible facilities",
      "Modified positioning and support systems",
      "Additional staff assistance when needed"
    ],
    image: "/services/Special Needs Dentistry page/overworked-stressed-min.jpg"
  },
  {
    title: "Patients with Fears of the Dentist",
    subtitle: "Dental anxiety and phobia management",
    description: "We specialize in treating patients who may require extra appointment time due to anxiety, phobia or treatment tolerance. For patients who require extensive work, we offer sedation dentistry options.",
    accommodations: [
      "Sedation dentistry options available",
      "Anxiety management techniques",
      "Gradual treatment approaches",
      "Pre-visit consultations and tours"
    ],
    image: "/services/Special Needs Dentistry page/female-patient-scared-dental-check-up-min.jpg"
  }
];

const services = [
  "Comprehensive oral health assessments",
  "Preventive care and cleanings",
  "Restorative treatments",
  "Sedation dentistry options",
  "Person-centered treatment planning",
  "Caregiver education and support",
  "Mechanical lift for safe transfers",
  "Specialized equipment and accommodations"
];

export default function SpecialNeedsDentistryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Special Needs Dentistry
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                We understand the unique needs of patients and we have the ability to accommodate those needs.
                Our practice delivers outstanding oral health services to patients with special needs and specializes
                in caring for individuals with intellectual and developmental disabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Schedule Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/services/sedation-dentistry" className="btn btn-outline btn-lg">
                  Learn more
                </Link>
              </div>
              <div className="card p-6 bg-teal-50 border-teal-200">
                <p className="text-teal-900 font-medium italic">
                  &ldquo;I frequent them often for dental services they provide my clients. Every staff is positive and caring,
                  often times beyond the norm. It is nice to have a relationship with them. They also provide great dental care for my clients!&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>Shannon B.</strong> - Patient Caregiver (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/Special Needs Dentistry page/Special needs dentistry -min.jpg"
                  alt="Special Needs Dentistry - Specialized Care"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Specialized Care for Every Patient
                    </p>
                    <p className="text-teal-100 text-sm">
                      Compassionate • Accessible • Professional
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
              Our Commitment to Special Needs Care
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We are proud of our reputation as a dental home for patients with special needs.
              We believe all individuals deserve the same standards of oral health care, which is why
              our dedicated staff are trained to safely manage cases that are not typical to general dentistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compassionate Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our skilled team of professionals makes everything we do possible. Their compassion,
                patience and commitment drives our success and guides us toward our goal of broadening
                access to quality dental care.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety & Comfort
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At our Practice, the safety, comfort and dignity of our patients are at the forefront
                of our service goals. We provide specialized accommodations for every unique need.
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
                Specialized Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We have a Hoyer lift to transfer patients with mobility difficulties into the dental chair
                and provide additional staff to meet patient requirements as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Types We Serve */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Our practice is designed to accommodate and care for patients with various special needs,
              providing personalized treatment plans and specialized accommodations.
            </p>
          </div>

          <div className="space-y-16">
            {patientTypes.map((type, index) => (
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
                        Our Accommodations
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
                      alt={`${type.title} - Specialized dental care`}
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
                What We Can Offer Patients with Special Needs
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Our comprehensive approach ensures that every patient receives the highest quality
                dental care in a comfortable, safe, and accommodating environment.
              </p>

              <ul className="space-y-4 mb-10">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{service}</span>
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
                  Person-Centered Services
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We deliver person-centered services, empowering and educating each of our patients
                  to take control of their oral health. Our approach is tailored to each individual&apos;s
                  unique needs and capabilities.
                </p>
                <Link href="/services" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn more about our approach
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sedation Options Available
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We provide the option of sedation dentistry, whereby sedative drugs are administered
                  orally or intravenously to help patients relax during dental procedures.
                </p>
                <Link href="/services/sedation-dentistry" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn about sedation dentistry
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
            One of Only Two in Middle Tennessee
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our practice is uniquely positioned as one of only two practices in Middle Tennessee
            offering comprehensive special needs dentistry with sedation options. This makes us
            a vital resource for families and caregivers throughout the region.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Would you like to know more about us or schedule an appointment?
            Contact us and we&apos;ll be in touch to discuss how we can meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services/sedation-dentistry" className="btn btn-outline btn-lg">
              Learn about sedation options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
