import Image from "next/image";
import Link from "next/link";

export default function DentalExamsCleaningsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-normal mb-6">
              Dental Exams & Cleanings
            </h1>
            <p className="text-lg text-slate-200 font-medium max-w-3xl mx-auto">
              Comprehensive dental examinations and professional cleanings in an accessible environment designed to accommodate patients with special needs and sensory sensitivities.
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
                  Comprehensive Preventive Care
                </h2>
                <p className="text-lg text-accent-600 font-medium mb-6">
                  Regular dental exams and cleanings are essential for maintaining optimal oral health.
                  Our practice provides comprehensive dental examinations and professional cleanings in an
                  accessible environment designed to accommodate patients with special needs and sensory sensitivities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We understand that every patient is unique, and our team is trained to provide personalized
                  care that addresses individual needs while ensuring comfort and dignity throughout the visit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">What to Expect During Your Visit</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Examination</h4>
                      <p className="text-gray-600">Thorough assessment of your oral health including teeth, gums, jaw, and bite analysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Digital X-Rays</h4>
                      <p className="text-gray-600">State-of-the-art digital imaging for accurate diagnosis with minimal radiation exposure.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Cleaning</h4>
                      <p className="text-gray-600">Gentle removal of plaque and tartar buildup with specialized techniques for sensitive patients.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Treatment Plan</h4>
                      <p className="text-gray-600">Customized recommendations based on your specific oral health needs and goals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Benefits of Regular Dental Care</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Early detection of dental issues</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Prevention of gum disease</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Fresh breath and healthy smile</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Improved overall health</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Your Appointment</h3>
                  <p className="text-gray-600 mb-6">
                    Regular dental exams and cleanings are the foundation of good oral health.
                    Contact us today to schedule your comprehensive dental examination.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 text-center">
                      Book Your Exam
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
                src="/services_pictures/Dental exams and Cleanings.jpg"
                alt="Professional dental cleaning"
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
