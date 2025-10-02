import Image from "next/image";
import Link from "next/link";

export default function RootCanalsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-normal mb-6">
              Root Canals
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Endodontic treatment to save infected or severely damaged teeth, performed with specialized techniques for patients with special needs and sedation options available.
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
                  Advanced Endodontic Care
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Root canal therapy is a specialized dental procedure designed to save teeth that have been
                  compromised by infection or severe damage. Our practice offers comprehensive endodontic
                  treatment using modern techniques and technologies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We understand that root canal procedures can cause anxiety for many patients. That&apos;s why
                  we offer sedation options and take extra time to ensure your comfort throughout the entire
                  process, especially for patients with special needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">When is a Root Canal Needed?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Deep Tooth Decay</h4>
                      <p className="text-gray-600">When cavities extend into the tooth&apos;s pulp chamber, causing infection or inflammation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dental Trauma</h4>
                      <p className="text-gray-600">Injury to the tooth that damages the pulp, often requiring immediate treatment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Repeated Dental Procedures</h4>
                      <p className="text-gray-600">When a tooth has undergone multiple treatments and the pulp becomes compromised.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cracked or Fractured Teeth</h4>
                      <p className="text-gray-600">Deep cracks that expose the pulp to bacteria, leading to infection.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Root Canal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consultation & Diagnosis</h4>
                      <p className="text-gray-600">Comprehensive examination and digital imaging to determine if root canal therapy is needed.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comfortable Treatment</h4>
                      <p className="text-gray-600">Local anesthesia and sedation options ensure a pain-free experience throughout the procedure.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pulp Removal & Cleaning</h4>
                      <p className="text-gray-600">Careful removal of infected tissue and thorough cleaning of the root canal system.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sealing & Restoration</h4>
                      <p className="text-gray-600">Sealing the cleaned canals and placing a permanent restoration to protect the tooth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Your Natural Tooth</h3>
                  <p className="text-gray-600 mb-6">
                    Root canal therapy has a high success rate and can save your natural tooth,
                    preventing the need for extraction and replacement. Contact us to discuss your options.
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
                src="/services_pictures/Root canals.jpg"
                alt="Root canal treatment"
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
