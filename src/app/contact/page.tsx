import Link from "next/link";
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white font-medium max-w-3xl mx-auto">
              Ready to schedule your appointment or have questions about our services? We&apos;re here to help you get the specialized dental care you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-medium text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Main Office: <a href="tel:+16159156090" className="text-teal-600 hover:text-teal-700">(615) 915-6090</a></p>
                    <p className="text-gray-600">Fax: (615) 915-6091</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      330 Wallace Rd. #106<br />
                      Nashville, TN 37211<br />
                      <span className="text-sm">Harding Office Plaza, just off of Harding Place, between I-65 and I-24</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Monday - Friday:</strong> 7:30 AM – 4:00 PM</p>
                      <p><strong>Saturday:</strong> Closed</p>
                      <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@mdvdds.com" className="text-teal-600 hover:text-teal-700">
                        info@mdvdds.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Care</h3>
                <p className="text-gray-600 mb-4">
                  For dental emergencies, please call our office immediately. We provide emergency care for our established patients and will do our best to see you as soon as possible.
                </p>
                <a href="tel:+16159156090" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Emergency: (615) 915-6090
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-medium text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="(615) 915-6090"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="consultation">Consultation</option>
                      <option value="emergency">Emergency</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="special-needs">Special Needs Inquiry</option>
                      <option value="sedation">Sedation Dentistry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tell us about your dental needs, concerns, or questions..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to Michael D. Vaughan, DDS contacting me regarding my inquiry. I understand that my information will be kept confidential and used only for the purpose of responding to my message.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn bg-teal-600 text-white hover:bg-teal-700 py-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-accent-600 font-medium max-w-3xl mx-auto">
              Located in Harding Office Plaza, just off of Harding Place, between I-65 and I-24.
              We provide a comfortable, accessible environment for all our patients.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              {/* Placeholder for Google Maps embed */}
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                  <p className="text-gray-500 text-sm">330 Wallace Rd. #106, Nashville, TN 37211</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg text-teal-100 font-medium mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to get the specialized dental care you need. Contact us today to Request a Consultation
            and experience the difference compassionate, expert care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+16159156090" className="btn bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-base font-medium">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call (615) 915-6090
            </Link>
            <Link href="/patient-forms" className="btn border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-base font-medium">
              Download Forms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
