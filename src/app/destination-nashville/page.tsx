import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, SparklesIcon, HeartIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function DestinationNashvillePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/destination_nashville/HERO.jpg"
            alt="Welcome to Nashville - Dental Care"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container-padding w-full">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
                Destination Nashville
              </h1>
              <p className="text-lg text-white font-medium max-w-4xl mx-auto">
                Combine world-class dental care with an unforgettable vacation in Music City. Experience stress-free dentistry while creating lasting memories in Nashville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                Transform Your Dental Experience Into a Vacation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Imagine receiving the specialized dental care you need while enjoying a relaxing vacation in one of America&apos;s most vibrant cities. At Michael D. Vaughan, DDS, we make this possible by combining our expertise in special needs dentistry and sedation with Nashville&apos;s renowned hospitality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialized Care</h3>
                    <p className="text-gray-600">Expert sedation dentistry for patients with PTSD, trauma, dental anxiety, and special needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Stress-Free Experience</h3>
                    <p className="text-gray-600">Sleep through your dental appointment with no memory of the procedure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Nashville Adventure</h3>
                    <p className="text-gray-600">Explore Music City with customized travel arrangements by local expert Carol Andrews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/destination_nashville/bill-griepenstroh-ZodHUsg0L0U-unsplash.jpg"
                alt="Comfortable dental experience at our Nashville office"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-12 text-center">
              Who We Welcome to Nashville
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PTSD & Trauma Patients</h3>
                <p className="text-gray-600">
                  Specialized care for those who have experienced trauma, providing a safe, comfortable environment for healing.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dental Anxiety</h3>
                <p className="text-gray-600">
                  Overcome your fear of dentistry with our gentle, patient-centered approach and sedation options.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Needs Families</h3>
                <p className="text-gray-600">
                  Comprehensive care for patients with neurodivergence, intellectual disabilities, and physical challenges.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobility Challenges</h3>
                <p className="text-gray-600">
                  Accessible facilities with mechanical lifts and accommodations for patients with physical limitations.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-12 text-center">
              Your Nashville Dental Vacation Experience
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 font-semibold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation (45 minutes)</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation to determine your dental needs and create a personalized treatment plan.
                      We&apos;ll discuss your goals, concerns, and sedation options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 font-semibold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Travel Planning</h3>
                    <p className="text-gray-600">
                      Work with our local travel expert Carol Andrews to arrange flights, accommodations, and activities
                      that fit your interests and budget. Experience the best of Nashville!
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 font-semibold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sedation Dentistry Treatment (90-120 minutes)</h3>
                    <p className="text-gray-600">
                      Receive your dental care while comfortably sedated. Wake up with a healthy smile and no memory
                      of the procedure - just wonderful vacation memories!
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/destination_nashville/cullen-jones-Ll1DN4QlpTY-unsplash.jpg"
                  alt="Patient receiving sedation dentistry"
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-teal-50 p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">
                Ready to Plan Your Nashville Dental Vacation?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Take the first step towards stress-free dental care and an unforgettable Nashville experience.
                Contact us today to start planning your personalized dental vacation package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-base font-medium">
                  Start Planning Your Trip
                </Link>
                <Link href="tel:+16159156090" className="btn border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-base font-medium">
                  Call (615) 915-6090
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
