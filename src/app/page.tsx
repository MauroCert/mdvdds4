import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Green Hills Full Screen Style */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
            src="/Interactions/_DSC4143.JPG"
            alt="Dr. Vaughan in modern dental office"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container-padding w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight">
                  PROVIDING<br />
                  COMPASSIONATE<br />
                  CARE
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-100 font-normal">
                  Your specialist in Nashville, TN specializing in special needs and sedation dentistry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700 border-accent-600 btn-hero">
                  SCHEDULE A CONSULTATION
                </Link>
                <Link href="/services" className="btn bg-secondary-600 text-white hover:bg-secondary-700 border-secondary-600 btn-hero">
                  WHY CHOOSE US?
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* This space is for the doctor image which is part of the background */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Pledge Section */}
      <section className="py-16 lg:py-24">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
            <Image
                src="/Interactions/_DSC4143.JPG"
                alt="Dr. Vaughan with patient"
                width={500}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 leading-tight">
                Our Pledge to Our Patients
              </h2>
              <p className="text-lg text-accent-600 font-medium">
                We are committed to you from beginning to end.
              </p>
              <p className="text-primary-600 leading-relaxed">
                Our goal is to provide our patients with professional, honest, and compassionate care. 
                It is our mission to educate our patients about their condition(s) and the different 
                treatment options available. Each patient&apos;s opinions, wants, and needs help to determine 
                the final treatment we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 mb-4">
              What Makes Our Practice Unique?
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              We are professional, honest, and provide compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <h3 className="text-xl font-medium text-primary-900 mb-4">Master at His Craft</h3>
              <p className="text-primary-600 leading-relaxed">
                Dr. Vaughan continues to further his knowledge by attending the latest courses in special needs dentistry. 
                His many years of experience combined with modern technology allows for superior outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <h3 className="text-xl font-medium text-primary-900 mb-4">Fearless Procedures</h3>
              <p className="text-primary-600 leading-relaxed">
                We know visiting a dental specialist can seem daunting. With Dr. Vaughan, you don&apos;t need to worry. 
                He will warmly welcome you, ensure you feel comfortable, and offer various sedation methods if needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <h3 className="text-xl font-medium text-primary-900 mb-4">All About You</h3>
              <p className="text-primary-600 leading-relaxed">
                When you visit our practice, we truly value and respect you. After meeting with Dr. Vaughan and 
                assessing your individual needs, we will discuss treatment options that best fit you and your comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-16 lg:py-24">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 mb-4">Our Services Menu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Special Needs Dentistry",
              "Sedation Dentistry", 
              "Dental Exams & Cleanings",
              "Root Canals",
              "Dentures",
              "Extractions",
            ].map((service, index) => (
              <div key={index} className="text-left">
                <span className="text-primary-600 hover:text-accent-600 transition-colors cursor-pointer">
                  • {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Shannon B.",
                content: "I frequent them often for dental services they provide my clients. Every staff is positive and caring, often times beyond the norm. It is nice to have a relationship with them. They also provide great dental care for my clients!"
              },
              {
                name: "Patricia A.",
                content: "Dr. Vaughan definitely deserves a TEN. He is the best dentist that I have ever met. Great hospitality and the staff is the best! Thank you so much for taking care of me."
              },
              {
                name: "J. Burks",
                content: "I had my first experience ever with being sedated. Everything from the consultation to the actual procedure was excellent. Dr. Vaughan was extremely kind and attentive. I&apos;d recommend this practice to anyone."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                <p className="text-primary-600 mb-4 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <p className="font-medium text-primary-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">Schedule Your Consultation</h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Please contact our office by either filling out the form below or by calling us at (615) 915-6090.
          </p>
          <Link href="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700 btn-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}