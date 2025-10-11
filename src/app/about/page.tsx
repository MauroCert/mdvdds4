import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Our Practice",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About Our Practice</h1>
              <p className="text-lg text-accent-600 font-medium mb-8">
                Excellence in Special Needs & Sedation Dentistry in the Nashville Area
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Michael D. Vaughan, DDS, we&apos;re committed to providing our patients with quality services and care. 
                We set the highest standards of patient care and support by leveraging our experience, diverse skill set, 
                and knowledge base.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Schedule Consultation
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/about/close-up-boy-dentist.jpg"
                alt="Dr. Vaughan providing dental care"
                width={600}
                height={400}
                className="w-full h-96 object-cover object-[30%_center]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-lg text-accent-600 font-medium">
              <strong>Michael D. Vaughan, DDS</strong> has provided the highest quality of Special Needs & Sedation Dentistry 
              care to patients in Nashville and surrounding communities. We pledge to offer procedures using the latest technology 
              in a safe, comfortable, and relaxed setting that is minimally invasive to our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our experience ranges from comprehensive dental care for patients with special needs to sedation dentistry 
                for those with dental anxiety. By working closely with our referring doctors, we employ a team approach 
                to ensure the most accurate diagnosis and treatment.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Dr. Vaughan specializes in caring for individuals with intellectual and developmental disabilities, 
                neurodivergence, physical challenges, and dental anxiety. Our practice is uniquely positioned as one of 
                only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.
              </p>
              <div className="space-y-4">
                {[
                  "Board-certified specialist in special needs dentistry",
                  "Extensive experience with sedation techniques",
                  "State-of-the-art facility with specialized equipment",
                  "Compassionate, patient-centered approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about/team-happy-doctors-standing-with-arms-crossed-mri-scanner-hospital-looking-camera.jpg"
                alt="Dr. Vaughan with patient"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Vaughan */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Headshots/e3_DSC4189.JPG"
                    alt="Dr. Michael D. Vaughan"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Dr. Michael D. Vaughan</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Vaughan is a highly qualified dentist specializing in special needs dentistry and sedation options. 
                His years of specialized experience allow him to provide our patients with dental care that is tailored 
                to meet each individual&apos;s specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                His commitment to continued education sets him apart as he stays ahead of the curve. He combines innovative 
                techniques with modern technology for more efficient and superior outcomes.
              </p>

              <div className="space-y-6 mb-8">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Needs Expertise</h3>
                  <p className="text-gray-700">
                    One of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sedation Dentistry</h3>
                  <p className="text-gray-700">
                    Extensive experience in various sedation techniques to ensure patient comfort and safety.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Person-Centered Care</h3>
                  <p className="text-gray-700">
                    Specialized approach tailored to each patient&apos;s unique needs and comfort level.
                  </p>
                </div>
              </div>

              <Link href="/services" className="btn btn-primary btn-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Special Needs Care</h2>
            <p className="text-lg text-accent-600 font-medium max-w-4xl mx-auto">
              We are proud of our reputation as a dental home for patients with special needs. We believe all individuals 
              deserve the same standards of oral health care, which is why our dedicated staff are trained to safely manage 
              cases that are not typical to general dentistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Our skilled team of professionals makes everything we do possible. Their compassion, patience and commitment 
                drives our success and guides us toward our goal of broadening access to quality dental care.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety & Comfort</h3>
              <p className="text-gray-600 leading-relaxed">
                At our Practice, the safety, comfort and dignity of our patients are at the forefront of our service goals. 
                We provide specialized accommodations for every unique need.
              </p>
            </div>

            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Equipment</h3>
              <p className="text-gray-600 leading-relaxed">
                We have a Hoyer lift to transfer patients with mobility difficulties into the dental chair and provide 
                additional staff to meet patient requirements as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-teal-600 text-white">
        <div className="container-padding text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/logo.png"
              alt="Michael D. Vaughan DDS Logo"
              width={180}
              height={180}
              className="brightness-0 invert"
            />
            <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-lg text-teal-100 font-medium max-w-2xl mx-auto">
              Would you like to know more about us or schedule an appointment? Contact us and we&apos;ll be in touch to discuss 
              how we can meet your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-teal-600 hover:bg-gray-100 btn-lg">
              Contact Us Today
            </Link>
            <Link href="/services/special-needs-dentistry" className="btn border-2 border-white text-white hover:bg-white hover:text-teal-600 btn-lg bg-transparent">
              Learn About Special Needs Care
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
