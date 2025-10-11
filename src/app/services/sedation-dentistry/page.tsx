import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Sedation Dentistry",
};

const sedationTypes = [
  {
    title: "Oral Sedation",
    subtitle: "Mild to moderate relaxation through medication",
    description: "Oral sedation involves taking medication before your appointment to help you feel relaxed and comfortable. This option is ideal for patients with mild to moderate dental anxiety.",
    accommodations: [
      "Pre-appointment medication for relaxation",
      "Conscious but relaxed during treatment",
      "Reduced anxiety and fear",
      "Minimal side effects"
    ],
    image: "/services/sedation-dentistry/dentist-hands-working-young-woman-patient-with-dental-tools (2)-min.jpg"
  },
  {
    title: "Nitrous Oxide",
    subtitle: "Laughing gas for immediate relaxation",
    description: "Nitrous oxide, commonly known as laughing gas, provides immediate relaxation and can be adjusted throughout your procedure. The effects wear off quickly after treatment.",
    accommodations: [
      "Immediate relaxation effect",
      "Adjustable sedation levels",
      "Quick recovery time",
      "Safe for most patients"
    ],
    image: "/services/sedation-dentistry/young-woman-receiving-dental-treatment-from-male-dentist-clinic-min.jpg"
  },
  {
    title: "IV Sedation",
    subtitle: "Deeper sedation for complex procedures",
    description: "Intravenous sedation provides deeper relaxation for patients requiring extensive dental work or those with severe anxiety. You'll be closely monitored throughout the procedure.",
    accommodations: [
      "Deeper sedation levels",
      "Continuous monitoring",
      "Ideal for complex procedures",
      "Professional anesthesia care"
    ],
    image: "/services/sedation-dentistry/paramedic-min.jpg"
  },
  {
    title: "General Anesthesia",
    subtitle: "Complete unconsciousness for extensive treatment",
    description: "For patients with severe anxiety or extensive dental needs, general anesthesia provides complete unconsciousness during treatment. This option is used for complex cases.",
    accommodations: [
      "Complete unconsciousness",
      "No memory of procedure",
      "Ideal for extensive treatment",
      "Hospital-grade monitoring"
    ],
    image: "/services/sedation-dentistry/patient-undergoing-microneedling-procedure-min.jpg"
  }
];

const benefits = [
  "Reduced anxiety and fear",
  "Comfortable treatment experience",
  "Ability to complete extensive work in fewer visits",
  "Reduced gag reflex sensitivity",
  "Minimal memory of the procedure",
  "Safe monitoring throughout treatment",
  "Faster treatment completion",
  "Improved treatment outcomes"
];

export default function SedationDentistryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Sedation Dentistry
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Safe and effective sedation options to help patients with anxiety receive dental care 
                in a comfortable, relaxed state. We specialize in treating patients who may require 
                extra appointment time due to anxiety, phobia or treatment tolerance.
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
                  &ldquo;Dr. Vaughan and his team made my dental experience comfortable and stress-free. 
                  The sedation options helped me overcome my dental anxiety completely.&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>Sarah M.</strong> - Patient (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/sedation-dentistry/Sedation Dentistry-min.jpg"
                  alt="Sedation Dentistry - Comfortable Care"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Comfortable Care for Every Patient
                    </p>
                    <p className="text-teal-100 text-sm">
                      Safe • Effective • Relaxing
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
              Our Commitment to Comfortable Care
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We understand that dental anxiety is real and can prevent patients from receiving 
              necessary care. Our sedation options ensure that every patient can receive the dental 
              treatment they need in a comfortable, relaxed environment.
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
                Our experienced team understands dental anxiety and provides compassionate, 
                patient-centered care to ensure your comfort throughout every procedure.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety & Monitoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All sedation procedures are performed with continuous monitoring and safety 
                protocols to ensure your well-being throughout the treatment.
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
                Advanced Techniques
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use the latest sedation techniques and equipment to provide safe, effective 
                sedation options tailored to your specific needs and comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sedation Types We Offer */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sedation Options We Offer
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We provide various sedation options to meet different comfort levels and treatment needs, 
              ensuring every patient can receive the dental care they need.
            </p>
          </div>

          <div className="space-y-16">
            {sedationTypes.map((type, index) => (
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
                        Key Benefits
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
                      alt={`${type.title} - Sedation dentistry`}
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
                Benefits of Sedation Dentistry
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Sedation dentistry offers numerous benefits for patients with dental anxiety, 
                allowing them to receive necessary treatment in a comfortable, relaxed state.
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
                  Personalized Sedation Plans
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We work with each patient to develop a personalized sedation plan that meets 
                  their specific needs, comfort level, and treatment requirements.
                </p>
                <Link href="/services" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Learn more about our approach
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Special Needs Integration
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our sedation options work seamlessly with our special needs dentistry services, 
                  providing comprehensive care for patients with various challenges.
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
            Expert Sedation Care in Nashville
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dr. Vaughan is experienced in various sedation techniques and works closely with 
            patients to determine the best sedation option for their comfort and safety. 
            Our practice is equipped with advanced monitoring equipment to ensure your well-being.
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
            Ready to Overcome Dental Anxiety?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let dental anxiety prevent you from receiving necessary care. 
            Contact us to discuss sedation options and schedule your comfortable dental experience.
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
                Is sedation dentistry safe?
              </h3>
              <p className="text-gray-600">
                Yes, sedation dentistry is very safe when administered by trained professionals. Dr. Vaughan
                and our team are experienced in sedation techniques and will monitor you throughout the procedure
                to ensure your safety and comfort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Will I be completely unconscious?
              </h3>
              <p className="text-gray-600">
                It depends on the type of sedation. With oral sedation and nitrous oxide, you&apos;ll be relaxed
                but conscious. IV sedation provides deeper relaxation where you may not remember the procedure.
                General anesthesia is rarely needed for dental procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does the sedation effect last?
              </h3>
              <p className="text-gray-600">
                The duration varies by sedation type. Oral sedation effects typically last 4-6 hours,
                while nitrous oxide wears off within minutes of stopping. You&apos;ll need someone to drive
                you home after oral or IV sedation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
