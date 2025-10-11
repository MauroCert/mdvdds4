import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Dentures",
};

const dentureTypes = [
  {
    title: "Complete Dentures",
    subtitle: "Full replacement for all teeth",
    description: "Complete dentures replace all teeth in the upper or lower jaw. We create custom-fitted dentures that provide optimal comfort and functionality, especially designed for patients with special needs.",
    accommodations: [
      "Custom-fitted for optimal comfort",
      "Natural-looking appearance",
      "Improved chewing and speaking ability",
      "Easy maintenance and care"
    ],
    image: "/services/dentures/close-up-dentist-holding-dentures-with-patient-min.jpg"
  },
  {
    title: "Partial Dentures",
    subtitle: "Replacement for some missing teeth",
    description: "Partial dentures replace one or more missing teeth while preserving remaining natural teeth. They are designed to blend seamlessly with your existing teeth for a natural appearance.",
    accommodations: [
      "Preserves remaining natural teeth",
      "Removable for easy cleaning",
      "Natural tooth-colored materials",
      "Custom-designed for your mouth"
    ],
    image: "/services/dentures/close-up-dentist-holding-teeth-model-min.jpg"
  },
  {
    title: "Immediate Dentures",
    subtitle: "Temporary solution after extractions",
    description: "Immediate dentures are placed immediately after tooth extraction, providing immediate function and appearance while your mouth heals and adjusts to wearing dentures.",
    accommodations: [
      "Immediate function after extractions",
      "Maintains facial appearance",
      "Temporary solution during healing",
      "Easy adjustment period"
    ],
    image: "/services/dentures/portrait-female-dentist-holding-set-dentures-min.jpg"
  },
  {
    title: "Special Needs Dentures",
    subtitle: "Customized for unique requirements",
    description: "We specialize in creating dentures for patients with special needs, taking into account individual challenges and requirements to ensure optimal fit, comfort, and functionality.",
    accommodations: [
      "Designed for special needs patients",
      "Extended fitting appointments",
      "Caregiver involvement in process",
      "Specialized materials and techniques"
    ],
    image: "/services/dentures/expressive-senior-woman-posing-min.jpg"
  }
];

const benefits = [
  "Restores ability to eat and chew properly",
  "Improves speech and pronunciation",
  "Enhances facial appearance and confidence",
  "Prevents remaining teeth from shifting",
  "Custom-designed for optimal fit",
  "Easy to clean and maintain",
  "Specialized care for special needs",
  "Affordable tooth replacement option"
];

export default function DenturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Dentures
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Complete and partial dentures designed and fitted with extra care for patients with special needs, 
                ensuring proper fit and comfort for enhanced quality of life. We understand that each patient 
                has unique requirements and take time to ensure optimal results.
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
                  &ldquo;Dr. Vaughan created the perfect dentures for my special needs. The fitting process 
                  was comfortable, and the final result looks and feels natural. I can eat and smile with confidence again.&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>Robert T.</strong> - Patient (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/dentures/Dentures-min.jpg"
                  alt="Dentures - Restoring Your Smile"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Restoring Your Smile
                    </p>
                    <p className="text-teal-100 text-sm">
                      Custom • Comfortable • Natural
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
              Our Commitment to Prosthodontic Excellence
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Dentures are removable replacements for missing teeth and surrounding tissues. Our practice 
              specializes in creating complete and partial dentures that are designed and fitted with extra 
              care, especially for patients with special needs.
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
                Custom Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each denture is custom-designed and fitted to your unique mouth structure, ensuring 
                optimal comfort, function, and natural appearance.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Special Needs Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating dentures for patients with special needs, taking into account 
                individual challenges and requirements for optimal results.
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
                Quality Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use high-quality materials and advanced techniques to create durable, comfortable 
                dentures that look and feel natural while providing long-lasting functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Denture Types We Offer */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Dentures We Offer
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We provide various types of dentures to meet different needs, from complete dentures 
              to specialized solutions for patients with special requirements.
            </p>
          </div>

          <div className="space-y-16">
            {dentureTypes.map((type, index) => (
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
                        Key Features
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
                      alt={`${type.title} - Denture care`}
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
                Benefits of Dentures
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Dentures offer numerous benefits for patients with missing teeth, providing a comfortable 
                and effective solution to restore function, appearance, and confidence.
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
                  Enhanced Quality of Life
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dentures restore your ability to eat, speak, and smile with confidence, significantly 
                  improving your quality of life and overall well-being.
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
                  We provide specialized denture services for patients with special needs, ensuring 
                  everyone can benefit from proper tooth replacement and oral function.
                </p>
                <Link href="/services/special-needs-dentistry" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn about special needs care
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
            Expert Prosthodontic Care in Nashville
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dr. Vaughan specializes in creating custom dentures for patients with special needs, 
            using advanced techniques and materials to ensure optimal fit, comfort, and functionality. 
            Our practice provides comprehensive denture services with personalized care.
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
            Ready to Restore Your Smile?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let missing teeth affect your quality of life. Contact us today to discuss 
            denture options and schedule your consultation for custom-fitted dentures.
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
                How long does it take to get dentures?
              </h3>
              <p className="text-gray-600">
                The denture process typically takes 4-6 weeks from initial impressions to final fitting. 
                For patients with special needs, we may extend the timeline to ensure optimal comfort 
                and fit. We&apos;ll discuss the expected timeline during your consultation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Will dentures affect my speech?
              </h3>
              <p className="text-gray-600">
                Initially, you may notice slight changes in speech, but most patients adapt quickly. 
                We provide speech exercises and adjustments to help you speak clearly with your new dentures. 
                Practice and patience are key to successful adaptation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I care for my dentures?
              </h3>
              <p className="text-gray-600">
                Proper denture care includes daily cleaning with a soft brush and denture cleaner, 
                soaking overnight, and regular dental checkups. We&apos;ll provide detailed care 
                instructions and demonstrate proper cleaning techniques during your fitting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you accommodate patients with special needs?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our practice specializes in providing denture services for patients with 
                special needs. We offer extended appointments, caregiver involvement, and specialized 
                techniques to ensure comfortable and successful denture fitting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}