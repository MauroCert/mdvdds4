import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Extractions",
};

const extractionTypes = [
  {
    title: "Simple Extractions",
    subtitle: "Routine removal of visible teeth",
    description: "Simple extractions are performed on teeth that are visible in the mouth and can be removed with standard dental instruments. This procedure is typically quick and straightforward.",
    accommodations: [
      "Local anesthesia for comfort",
      "Quick and efficient procedure",
      "Minimal discomfort during extraction",
      "Simple aftercare instructions"
    ],
    image: "/services/extractions/dentist-with-tool-makes-some-manipulations-patient-s-mouth.jpg"
  },
  {
    title: "Surgical Extractions",
    subtitle: "Complex removal requiring surgical techniques",
    description: "Surgical extractions are needed for teeth that are impacted, broken below the gum line, or require special techniques. We use advanced surgical methods for optimal results.",
    accommodations: [
      "Advanced surgical techniques",
      "Sedation options available",
      "Careful tissue management",
      "Comprehensive aftercare support"
    ],
    image: "/services/extractions/dentist-assistant-surgery-dental-clinic (2).jpg"
  },
  {
    title: "Wisdom Tooth Removal",
    subtitle: "Specialized extraction of third molars",
    description: "Wisdom tooth extractions often require surgical techniques due to their position and development. We provide specialized care for these complex extractions.",
    accommodations: [
      "Specialized wisdom tooth techniques",
      "Sedation options for comfort",
      "Minimally invasive approaches",
      "Detailed recovery planning"
    ],
    image: "/services/extractions/female-patient-opening-her-mouth-doctor-look-her-throat-otolaryngologist-examines-sore-throat-patient (2).jpg"
  },
  {
    title: "Special Needs Extractions",
    subtitle: "Compassionate care for unique requirements",
    description: "We specialize in providing tooth extractions for patients with special needs, using specialized techniques and accommodations to ensure comfort and safety throughout the procedure.",
    accommodations: [
      "Specialized techniques for special needs",
      "Extended appointment times",
      "Caregiver involvement and support",
      "Comprehensive comfort measures"
    ],
    image: "/services/extractions/patient-scared-by-dental-equipment.jpg"
  }
];

const benefits = [
  "Relieves pain and discomfort",
  "Prevents spread of infection",
  "Removes damaged or problematic teeth",
  "Prepares mouth for future treatments",
  "Sedation options for comfort",
  "Specialized care for special needs",
  "Minimal discomfort during procedure",
  "Comprehensive aftercare support"
];

export default function ExtractionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Extractions
              </h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Tooth extractions performed with specialized techniques and sedation options to ensure 
                patient comfort, particularly for those with dental anxiety or special needs. We understand 
                that extractions can be anxiety-provoking and provide compassionate care.
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
                  &ldquo;I was terrified about having my tooth extracted, but Dr. Vaughan and his team 
                  made the entire process comfortable and stress-free. The sedation options helped me 
                  relax completely.&rdquo;
                </p>
                <p className="text-teal-700 text-sm mt-2">
                  <strong>David K.</strong> - Patient (from Google Reviews)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/services/extractions/dental extractions.jpg"
                  alt="Extractions - Gentle Tooth Removal"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <p className="font-semibold text-lg mb-2">
                      Gentle Tooth Removal
                    </p>
                    <p className="text-teal-100 text-sm">
                      Comfortable • Safe • Compassionate
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
              Our Commitment to Comfortable Extractions
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              Tooth extraction is sometimes necessary when a tooth is too damaged to be saved or when 
              it poses a risk to your overall oral health. Our practice specializes in performing 
              extractions with the utmost care and comfort.
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
                Gentle Techniques
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use gentle, advanced techniques to minimize discomfort during extractions, 
                ensuring your comfort throughout the entire procedure.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sedation Options
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer various sedation options to help anxious patients feel comfortable and 
                relaxed during their extraction procedure.
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
                Our practice specializes in providing extractions for patients with special needs, 
                ensuring everyone receives comfortable, safe care tailored to their unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extraction Types We Offer */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Extractions We Offer
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We provide various types of tooth extractions to meet different needs, from simple 
              extractions to complex surgical procedures, all performed with comfort and care.
            </p>
          </div>

          <div className="space-y-16">
            {extractionTypes.map((type, index) => (
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
                      alt={`${type.title} - Tooth extraction`}
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
                Benefits of Professional Extractions
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Professional tooth extractions provide numerous benefits for patients with damaged 
                or problematic teeth, offering relief and preparing the mouth for future treatments.
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
                  Pain Relief and Comfort
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tooth extractions provide immediate relief from pain and discomfort caused by 
                  damaged or infected teeth, improving your overall quality of life.
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
                  We provide sedation options for patients who experience anxiety about extractions, 
                  ensuring a comfortable and stress-free experience throughout the procedure.
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
            Expert Oral Surgery Care in Nashville
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dr. Vaughan specializes in providing comfortable tooth extractions for patients with special needs, 
            using advanced techniques and sedation options to ensure optimal outcomes. Our practice provides 
            comprehensive extraction services with personalized care and attention.
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
            Ready to Address Your Dental Needs?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let tooth pain or dental problems continue. Contact us today to discuss 
            extraction options and schedule your comfortable, professional procedure.
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
                Is tooth extraction painful?
              </h3>
              <p className="text-gray-600">
                Modern tooth extraction techniques are designed to minimize discomfort. We use local 
                anesthesia to numb the area, and sedation options are available for anxious patients. 
                Most patients report feeling pressure rather than pain during the procedure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does recovery take?
              </h3>
              <p className="text-gray-600">
                Recovery time varies depending on the complexity of the extraction. Simple extractions 
                typically heal within 3-7 days, while surgical extractions may take 7-14 days. We&apos;ll 
                provide detailed aftercare instructions to promote optimal healing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What should I do after an extraction?
              </h3>
              <p className="text-gray-600">
                After extraction, follow our detailed aftercare instructions including rest, ice packs 
                for swelling, soft foods, and proper oral hygiene. Avoid smoking, drinking through straws, 
                and vigorous rinsing for the first 24 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you accommodate patients with special needs?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our practice specializes in providing extractions for patients with special 
                needs. We offer extended appointments, sedation options, caregiver involvement, and 
                specialized techniques to ensure comfortable and successful procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}