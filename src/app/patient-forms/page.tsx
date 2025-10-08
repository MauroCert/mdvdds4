import Link from "next/link";
import { DocumentIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function PatientFormsPage() {
  const forms = [
    {
      title: "New Patient Registration Form",
      description: "Complete this form before your first visit to help us provide you with the best possible care.",
      category: "New Patients",
      downloadUrl: "/forms/new-patient-registration.pdf"
    },
    {
      title: "Medical History Form",
      description: "Please provide detailed information about your medical history, medications, and any conditions that may affect your dental treatment.",
      category: "All Patients",
      downloadUrl: "/forms/medical-history.pdf"
    },
    {
      title: "Dental Anxiety Questionnaire",
      description: "Help us understand your concerns and preferences for a comfortable dental experience.",
      category: "All Patients",
      downloadUrl: "/forms/dental-anxiety.pdf"
    },
    {
      title: "Special Needs Information Form",
      description: "Additional information to help us provide specialized care for patients with special needs.",
      category: "Special Needs",
      downloadUrl: "/forms/special-needs-info.pdf"
    },
    {
      title: "Sedation Dentistry Consent Form",
      description: "Required consent form for patients considering sedation dentistry options.",
      category: "Sedation Patients",
      downloadUrl: "/forms/sedation-consent.pdf"
    },
    {
      title: "Financial Agreement Form",
      description: "Understanding of payment policies and financial responsibilities.",
      category: "All Patients",
      downloadUrl: "/forms/financial-agreement.pdf"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
              Patient Forms
            </h1>
            <p className="text-lg text-white font-medium max-w-3xl mx-auto">
              Download and complete the necessary forms before your visit to help us provide you with the most efficient and personalized care possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-medium text-gray-900 mb-6">
                Prepare for Your Visit
              </h2>
              <p className="text-lg text-accent-600 font-medium">
                To ensure we can provide you with the highest quality care, please download and complete the
                appropriate forms before your appointment. This helps us understand your needs and prepare
                for your visit. If you have any questions about which forms to complete, please don&apos;t hesitate
                to contact our office.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forms.map((form, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 transition-colors">
                  <div className="flex items-start mb-4">
                    <DocumentIcon className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                        <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                          {form.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {form.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="inline-flex items-center px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download Form
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-teal-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Need Help Choosing Forms?
              </h2>
              <p className="text-lg text-accent-600 font-medium mb-6">
                Not sure which forms you need to complete? Our team is here to help. Contact us and we&apos;ll guide
                you through the process and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-base font-medium">
                  Contact Us for Help
                </Link>
                <Link href="tel:+16159156090" className="btn border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-base font-medium">
                  Call (615) 915-6090
                </Link>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Bring to Your Appointment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-600">Completed Forms</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-600">Insurance Card</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-600">Photo ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Forms
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do I need to complete all forms before my first visit?
              </h3>
              <p className="text-gray-600">
                While it&apos;s helpful to complete as many forms as possible beforehand, you can also fill them out
                in our office. However, completing them in advance allows us to better prepare for your visit
                and reduces wait times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if I have questions about the forms?
              </h3>
              <p className="text-gray-600">
                Our friendly staff is always available to help. Feel free to call us at (615) 915-6090 or ask
                any questions when you arrive for your appointment. We&apos;re here to make the process as easy as possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I submit forms electronically?
              </h3>
              <p className="text-gray-600">
                Currently, we require physical forms to be completed and brought to your appointment. However,
                we&apos;re working on implementing electronic form submission in the near future for added convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
