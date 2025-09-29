import Image from "next/image";
import Link from "next/link";
import { AcademicCapIcon, ShieldCheckIcon, HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Special Needs Dentistry",
    description: "Specialized dental care for patients with neurodivergence, intellectual disabilities, physical challenges, and dental anxiety. One of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.",
    image: "/services_pictures/Special needs dentistry .jpg",
    href: "/services/special-needs-dentistry",
  },
  {
    title: "Sedation Dentistry",
    description: "Safe and effective sedation options including oral sedation, nitrous oxide, and IV sedation to help patients with anxiety receive dental care in a comfortable, relaxed state.",
    image: "/services_pictures/Sedation Dentistry.jpg",
    href: "/services/sedation-dentistry",
  },
  {
    title: "Dental Exams & Cleanings",
    description: "Comprehensive dental examinations and professional cleanings in an accessible environment designed to accommodate patients with special needs and sensory sensitivities.",
    image: "/services_pictures/Dental exams and Cleanings.jpg",
    href: "/services/dental-exams-cleanings",
  },
  {
    title: "Root Canals",
    description: "Endodontic treatment to save infected or severely damaged teeth, performed with specialized techniques for patients with special needs and sedation options available.",
    image: "/services_pictures/Root canals.jpg",
    href: "/services/root-canals",
  },
  {
    title: "Dentures",
    description: "Complete and partial dentures designed and fitted with extra care for patients with special needs, ensuring proper fit and comfort for enhanced quality of life.",
    image: "/services_pictures/Dentures.jpg",
    href: "/services/dentures",
  },
  {
    title: "Extractions",
    description: "Tooth extractions performed with specialized techniques and sedation options to ensure patient comfort, particularly for those with dental anxiety or special needs.",
    image: "/services_pictures/dental extractions.jpg",
    href: "/services/extractions",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Green Hills Full Screen Style */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
            src="/Interactions/_DSC3997.JPG"
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
                src="/Interactions/_DSC4016.JPG"
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
              <div className="flex justify-center mb-4">
                <AcademicCapIcon className="h-12 w-12 text-accent-600" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">Master at His Craft</h3>
              <p className="text-primary-600 leading-relaxed">
                Dr. Vaughan continues to further his knowledge by attending the latest courses in special needs dentistry.
                His many years of experience combined with modern technology allows for superior outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheckIcon className="h-12 w-12 text-accent-600" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">Fearless Procedures</h3>
              <p className="text-primary-600 leading-relaxed">
                We know visiting a dental specialist can seem daunting. With Dr. Vaughan, you don&apos;t need to worry.
                He will warmly welcome you, ensure you feel comfortable, and offer various sedation methods if needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <div className="flex justify-center mb-4">
                <HeartIcon className="h-12 w-12 text-accent-600" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">All About You</h3>
              <p className="text-primary-600 leading-relaxed">
                When you visit our practice, we truly value and respect you. After meeting with Dr. Vaughan and
                assessing your individual needs, we will discuss treatment options that best fit you and your comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Dental Services */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 mb-4">Our Dental Services</h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              All services provided in a comfortable, accessible environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="card card-hover group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent-600 font-medium">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences with compassionate, specialized care.
            </p>
          </div>

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

          {/* Google Reviews CTA */}
          <div className="mt-12 text-center">
            <Link
              href="https://maps.app.goo.gl/cvtEg7mzaQr3mq6M7"
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Read More Reviews on Google
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Dr. Vaughan */}
      <section className="py-16 lg:py-24">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
          <Image
                src="/Headshots/e3_DSC4189.JPG"
                alt="Dr. Michael D. Vaughan"
                width={500}
                height={600}
                className="w-full h-96 object-cover object-[50%_18%] rounded-lg shadow-soft"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-medium text-primary-900 leading-tight">
                Meet Dr. Michael D. Vaughan
              </h2>
              <p className="text-lg text-accent-600 font-medium">
                Your specialist in Nashville, TN
              </p>
              <p className="text-primary-600 leading-relaxed">
                Dr. Michael D. Vaughan is a highly experienced dentist specializing in special needs dentistry and sedation dentistry.
                With years of dedicated practice in Nashville, Tennessee, Dr. Vaughan has earned a reputation for providing
                compassionate, professional care to patients of all ages and abilities.
              </p>
              <p className="text-primary-600 leading-relaxed">
                His commitment to continuing education ensures that he stays at the forefront of modern dental techniques
                and technologies. Dr. Vaughan believes in treating each patient as an individual, taking the time to understand
                their unique needs and concerns to provide the best possible dental care experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/about" className="btn bg-accent-600 text-white hover:bg-accent-700 border-accent-600 btn-hero">
                  LEARN MORE ABOUT DR. VAUGHAN
                </Link>
                <Link href="/services" className="btn bg-secondary-600 text-white hover:bg-secondary-700 border-secondary-600 btn-hero">
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help? */}
      <section className="py-16 lg:py-24 bg-accent-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">How Can We Help?</h2>
          <p className="text-lg text-accent-100 mb-8 max-w-3xl mx-auto">
            Our patients are celebrities in our office. As a caring team, we always go the extra mile to ensure
            you feel comfortable and achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              "One-on-one time with Dr. Vaughan",
              "Specialist care from a trained professional",
              "Open and transparent communication",
              "Online patient forms",
              "Help with insurance and payment plans",
              "Sedation dentistry options"
            ].map((feature, index) => (
              <div key={index} className="flex items-center text-left">
                <svg className="w-5 h-5 text-accent-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-100">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-accent-600 hover:bg-gray-100 btn-lg">
              Schedule Your Consultation
            </Link>
            <Link href="tel:+16159156090" className="btn border-2 border-white text-white hover:bg-white hover:text-accent-600 btn-lg bg-transparent">
              Call Us at (615) 915-6090
            </Link>
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