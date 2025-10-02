import Image from "next/image";
import Link from "next/link";

export default function SedationDentistryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-normal mb-6">
              Sedation Dentistry
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Safe and effective sedation options to help patients with anxiety receive dental care in a comfortable, relaxed state.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-medium text-gray-900 mb-6">
                  Comfortable Dental Care for Anxious Patients
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Does the thought of going to the dentist make you feel anxious? We specialize in treating patients
                  who may require extra appointment time due to anxiety, phobia or treatment tolerance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  For patients who require extensive work or experience difficulties in clinical environments,
                  we offer various sedation dentistry options to ensure your comfort throughout the procedure.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Sedation Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Oral Sedation</h4>
                      <p className="text-gray-600">Mild to moderate sedation through oral medication for relaxation during treatment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nitrous Oxide</h4>
                      <p className="text-gray-600">Also known as &ldquo;laughing gas,&rdquo; provides mild sedation and relaxation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">IV Sedation</h4>
                      <p className="text-gray-600">Deeper sedation administered intravenously for more complex procedures.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Who Benefits from Sedation Dentistry?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Patients with dental anxiety or phobia</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Individuals with low pain tolerance</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Patients requiring extensive treatment</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Those with sensitive gag reflexes</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Our experienced team will discuss your sedation options during your consultation to determine
                    the best approach for your comfort and safety.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 text-center">
                      Schedule Consultation
                    </Link>
                    <Link href="tel:+16159156090" className="btn border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-center">
                      Call (615) 915-6090
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8">
              <Image
                src="/services_pictures/Sedation Dentistry.jpg"
                alt="Patient receiving sedation dentistry"
                width={500}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
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
