import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Root Canals",
};

const rootCanalTypes = [
  {
    title: "Initial Consultation",
    subtitle: "Comprehensive diagnosis and treatment planning",
    description: "Our root canal process begins with a thorough examination and digital imaging to determine if root canal therapy is needed. We take time to explain the procedure and answer all your questions.",
    accommodations: [
      "Comprehensive examination and diagnosis",
      "Digital imaging for accurate assessment",
      "Detailed treatment explanation",
      "Sedation options discussion"
    ],
    image: "/services/root_canals/dentist-examining-female-patient-with-tools-min.jpg"
  },
  {
    title: "Comfortable Treatment",
    subtitle: "Pain-free procedure with sedation options",
    description: "We use local anesthesia and offer sedation options to ensure a pain-free experience throughout the procedure. Our team monitors your comfort continuously.",
    accommodations: [
      "Local anesthesia for complete numbness",
      "Sedation options for anxious patients",
      "Continuous comfort monitoring",
      "Gentle, patient-centered approach"
    ],
    image: "/services/root_canals/close-up-dental-procedure-patient-min.jpg"
  },
  {
    title: "Pulp Removal & Cleaning",
    subtitle: "Thorough cleaning of infected tissue",
    description: "We carefully remove infected tissue and thoroughly clean the root canal system using advanced techniques and equipment to ensure complete removal of bacteria.",
    accommodations: [
      "Careful removal of infected tissue",
      "Thorough cleaning of root canals",
      "Advanced cleaning techniques",
      "Complete bacteria removal"
    ],
    image: "/services/root_canals/dentist-assistant-surgery-dental-clinic (1)-min.jpg"
  },
  {
    title: "Sealing & Restoration",
    subtitle: "Protective sealing and permanent restoration",
    description: "After cleaning, we seal the root canals and place a permanent restoration to protect the tooth and restore its function and appearance.",
    accommodations: [
      "Sealing of cleaned root canals",
      "Permanent restoration placement",
      "Protection of treated tooth",
      "Restoration of function and appearance"
    ],
    image: "/services/root_canals/macro-photography-beautiful-female-smile-with-white-healthy-teeth (3)-min.jpg"
  }
];

const benefits = [
  "Saves your natural tooth from extraction",
  "Relieves pain and discomfort",
  "Prevents spread of infection",
  "Restores normal chewing function",
  "Maintains natural appearance",
  "High success rate with proper care",
  "Sedation options for comfort",
  "Specialized care for special needs patients"
];

export default function RootCanalsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Root Canals
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Endodontic treatment to save infected or severely damaged teeth, performed with specialized 
                techniques for patients with special needs and sedation options available. We understand 
                that root canal procedures can cause anxiety and provide comfortable care.
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
                  &ldquo;I was terrified of root canals, but Dr. Vaughan made the entire process comfortable. 
                  The sedation options helped me relax, and I didn&apos;t feel any pain during the procedure.&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>Jennifer L.</strong> - Patient (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/root_canals/Root canals-min.jpg"
                  alt="Root Canals - Advanced Endodontic Care"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Advanced Endodontic Care
                    </p>
                    <p className="text-teal-100 text-sm">
                      Comfortable • Effective • Safe
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
              Our Commitment to Endodontic Excellence
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Root canal therapy is a specialized dental procedure designed to save teeth that have been 
              compromised by infection or severe damage. Our practice offers comprehensive endodontic 
              treatment using modern techniques and technologies.
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
                Advanced Techniques
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use the latest endodontic techniques and equipment to provide effective root canal 
                treatment with minimal discomfort and maximum success rates.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comfortable Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that root canal procedures can cause anxiety. That&apos;s why we offer 
                sedation options and take extra time to ensure your comfort throughout the entire process.
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
                Special Needs Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our practice specializes in providing root canal treatment for patients with special needs, 
                ensuring everyone receives the care they need in a comfortable, accommodating environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Root Canal Process */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Root Canal Process
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Our comprehensive root canal process is designed to save your natural tooth while ensuring 
              your comfort throughout the entire procedure, especially for patients with special needs.
            </p>
          </div>

          <div className="space-y-16">
            {rootCanalTypes.map((type, index) => (
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
                      alt={`${type.title} - Root canal treatment`}
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
                Benefits of Root Canal Treatment
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Root canal treatment offers numerous benefits for patients with infected or damaged teeth, 
                providing a comfortable way to save your natural tooth and restore oral health.
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
                  Save Your Natural Tooth
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Root canal therapy has a high success rate and can save your natural tooth, 
                  preventing the need for extraction and replacement with artificial alternatives.
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
                  We provide sedation options for patients who experience anxiety about root canal 
                  treatment, ensuring a comfortable and stress-free experience.
                </p>
                <Link href="/services/sedation-dentistry" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn about sedation options
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
            Expert Endodontic Care in Nashville
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dr. Vaughan is experienced in providing root canal treatment for patients with special needs, 
            using advanced techniques and sedation options to ensure comfortable, successful outcomes. 
            Our practice is equipped with modern equipment and monitoring systems.
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
            Ready to Save Your Tooth?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let tooth pain or infection continue. Contact us today to discuss root canal 
            treatment options and schedule your comfortable, effective procedure.
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
                Is root canal treatment painful?
              </h3>
              <p className="text-gray-600">
                Modern root canal treatment is virtually painless. We use local anesthesia to numb the area,
                and sedation options are available for anxious patients. Most patients report feeling
                comfortable throughout the procedure and experience minimal discomfort afterward.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does a root canal take?
              </h3>
              <p className="text-gray-600">
                The procedure typically takes 1-2 hours per tooth, depending on complexity. Some cases
                may require multiple visits. We&apos;ll discuss the expected timeline during your consultation
                and work with your schedule to minimize inconvenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What happens after a root canal?
              </h3>
              <p className="text-gray-600">
                After treatment, you may experience mild sensitivity for a few days, which can be managed
                with over-the-counter pain medication. We&apos;ll provide detailed aftercare instructions and
                schedule follow-up appointments to ensure proper healing and crown placement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I eat normally after a root canal?
              </h3>
              <p className="text-gray-600">
                You should avoid chewing on the treated tooth until it&apos;s permanently restored with a crown.
                We recommend eating soft foods and avoiding very hot or cold items for the first few days.
                Normal eating can resume once the permanent restoration is in place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
