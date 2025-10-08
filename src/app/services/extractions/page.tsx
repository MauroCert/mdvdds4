import Image from "next/image";
import Link from "next/link";

export default function ExtractionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-normal mb-6">
              Extractions
            </h1>
            <p className="text-lg text-slate-200 font-medium max-w-3xl mx-auto">
              Tooth extractions performed with specialized techniques and sedation options to ensure patient comfort, particularly for those with dental anxiety or special needs.
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
                  Gentle and Compassionate Tooth Removal
                </h2>
                <p className="text-lg text-accent-600 font-medium mb-6">
                  Tooth extraction is sometimes necessary when a tooth is too damaged to be saved or when
                  it poses a risk to your overall oral health. Our practice specializes in performing
                  extractions with the utmost care and comfort, especially for patients with special needs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We understand that the thought of having a tooth extracted can be anxiety-provoking.
                  That&apos;s why we offer sedation options and take extra time to ensure your comfort throughout
                  the entire process. Our goal is to make the experience as stress-free as possible.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">When Extraction May Be Necessary</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Severely Damaged Teeth</h4>
                      <p className="text-gray-600">Teeth that are too decayed, fractured, or infected to be saved through other treatments.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Impacted Wisdom Teeth</h4>
                      <p className="text-gray-600">Wisdom teeth that haven&apos;t erupted properly and may cause pain or infection.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Orthodontic Treatment</h4>
                      <p className="text-gray-600">Removal of teeth to create space for proper alignment during orthodontic treatment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Infection Prevention</h4>
                      <p className="text-gray-600">Extraction of teeth that could spread infection to other areas of the mouth or body.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Extraction Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Evaluation</h4>
                      <p className="text-gray-600">Thorough examination and x-rays to determine if extraction is the best option for your oral health.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comfortable Anesthesia</h4>
                      <p className="text-gray-600">Local anesthesia to numb the area, with sedation options available for anxious patients.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Gentle Extraction</h4>
                      <p className="text-gray-600">Careful removal of the tooth using specialized techniques to minimize trauma to surrounding tissues.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Aftercare Instructions</h4>
                      <p className="text-gray-600">Detailed guidance on post-extraction care and follow-up appointments for optimal healing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Benefits of Professional Extraction</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Eliminates pain and infection</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Prevents spread of dental issues</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Improves overall oral health</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Creates space for proper alignment</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Need an Extraction?</h3>
                  <p className="text-gray-600 mb-6">
                    If you&apos;re experiencing tooth pain or have been told you need an extraction,
                    our compassionate team is here to help. We prioritize your comfort and will
                    discuss all your options to ensure the best outcome for your oral health.
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
                src="/services_pictures/dental extractions.jpg"
                alt="Professional tooth extraction"
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
                Is tooth extraction painful?
              </h3>
              <p className="text-gray-600">
                With modern anesthesia and sedation techniques, tooth extraction is virtually painless during
                the procedure. You may experience some discomfort during healing, but this can be managed with
                over-the-counter pain medication as recommended by Dr. Vaughan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does recovery take?
              </h3>
              <p className="text-gray-600">
                Initial healing typically takes 1-2 weeks, with complete healing of the extraction site
                taking several months. Most patients can return to normal activities within a day or two,
                though we recommend avoiding strenuous activity for the first 24 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What should I eat after an extraction?
              </h3>
              <p className="text-gray-600">
                For the first 24 hours, stick to soft, cool foods like yogurt, applesauce, and mashed potatoes.
                Avoid hot, spicy, or crunchy foods that could irritate the extraction site. Gradually
                return to your normal diet as healing progresses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Will I need a replacement tooth?
              </h3>
              <p className="text-gray-600">
                Not always, but missing teeth can affect your bite, speech, and the alignment of remaining teeth.
                Dr. Vaughan will discuss replacement options such as dental implants, bridges, or dentures
                during your consultation to help you make the best decision for your oral health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
