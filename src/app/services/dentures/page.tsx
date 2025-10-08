import Image from "next/image";
import Link from "next/link";

export default function DenturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-normal mb-6">
              Dentures
            </h1>
            <p className="text-lg text-slate-200 font-medium max-w-3xl mx-auto">
              Complete and partial dentures designed and fitted with extra care for patients with special needs, ensuring proper fit and comfort for enhanced quality of life.
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
                  Restoring Your Smile with Custom Dentures
                </h2>
                <p className="text-lg text-accent-600 font-medium mb-6">
                  Dentures are removable replacements for missing teeth and surrounding tissues. Our practice
                  specializes in creating complete and partial dentures that are designed and fitted with extra
                  care, especially for patients with special needs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We understand that each patient has unique requirements, and we take the time to ensure
                  proper fit, comfort, and functionality. Our goal is to enhance your quality of life by
                  restoring your ability to eat, speak, and smile with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Types of Dentures We Offer</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Dentures</h4>
                      <p className="text-gray-600">Full set of artificial teeth for patients who have lost all teeth in the upper or lower jaw.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Partial Dentures</h4>
                      <p className="text-gray-600">Removable dental prosthesis that replaces one or more missing teeth while preserving existing natural teeth.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implant-Supported Dentures</h4>
                      <p className="text-gray-600">Dentures anchored by dental implants for enhanced stability and retention.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Immediate Dentures</h4>
                      <p className="text-gray-600">Temporary dentures placed immediately after tooth extraction for aesthetic and functional purposes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Benefits of Quality Dentures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Improved chewing and digestion</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Enhanced speech clarity</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Restored facial appearance</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Increased confidence and self-esteem</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Denture Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Consultation</h4>
                      <p className="text-gray-600">Evaluation of your oral health, discussion of options, and creation of a personalized treatment plan.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Precise Impressions</h4>
                      <p className="text-gray-600">Accurate measurements and impressions to ensure proper fit and optimal comfort.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Fabrication</h4>
                      <p className="text-gray-600">Careful crafting of your dentures using high-quality materials for durability and natural appearance.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fitting & Adjustments</h4>
                      <p className="text-gray-600">Final fitting with any necessary adjustments to ensure comfort and proper function.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Restore Your Smile?</h3>
                  <p className="text-gray-600 mb-6">
                    Our experienced team will guide you through every step of the denture process,
                    ensuring you receive the highest quality care and achieve the best possible outcome.
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
                src="/services_pictures/Dentures.jpg"
                alt="Custom dentures"
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
                How long do dentures last?
              </h3>
              <p className="text-gray-600">
                With proper care, dentures typically last 5-10 years. Regular check-ups allow us to monitor
                their condition and recommend relining or replacement when needed. Good oral hygiene and
                proper care significantly extend their lifespan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Will dentures affect my speech?
              </h3>
              <p className="text-gray-600">
                Initially, you may notice slight changes in speech patterns as you adjust to wearing dentures.
                Most patients adapt quickly, usually within a few weeks. We provide guidance on speaking
                techniques and may recommend speech exercises if needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I eat normally with dentures?
              </h3>
              <p className="text-gray-600">
                Yes, you can eat most foods with dentures, though you may need to avoid very sticky or hard
                foods initially. We recommend starting with softer foods and cutting food into smaller pieces.
                As you become accustomed to your dentures, you&apos;ll be able to enjoy a wider variety of foods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I care for my dentures?
              </h3>
              <p className="text-gray-600">
                Daily cleaning with a soft brush and denture cleaner is essential. Remove dentures at night
                to allow your gums to rest. Regular dental check-ups ensure proper fit and allow us to address
                any issues early. Store dentures in water or a denture solution when not wearing them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
