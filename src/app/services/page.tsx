import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Our Services",
};

const services = [
  {
    title: "Special Needs Dentistry",
    description: "Specialized dental care for patients with neurodivergence, intellectual disabilities, physical challenges, and dental anxiety. One of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.",
    image: "/services_pictures/Special needs dentistry .jpg",
    href: "/services/special-needs-dentistry",
    featured: true,
  },
  {
    title: "Sedation Dentistry",
    description: "Safe and effective sedation options including oral sedation, nitrous oxide, and IV sedation to help patients with anxiety receive dental care in a comfortable, relaxed state.",
    image: "/services_pictures/Sedation Dentistry.jpg",
    href: "/services/sedation-dentistry",
    featured: true,
  },
  {
    title: "Dental Exams & Cleanings",
    description: "Comprehensive dental examinations and professional cleanings in an accessible environment designed to accommodate patients with special needs and sensory sensitivities.",
    image: "/services_pictures/Dental exams and Cleanings.jpg",
    href: "/services/dental-exams-cleanings",
    featured: true,
  },
  {
    title: "Root Canals",
    description: "Endodontic treatment to save infected or severely damaged teeth, performed with specialized techniques for patients with special needs and sedation options available.",
    image: "/services_pictures/Root canals.jpg",
    href: "/services/root-canals",
    featured: true,
  },
  {
    title: "Dentures",
    description: "Complete and partial dentures designed and fitted with extra care for patients with special needs, ensuring proper fit and comfort for enhanced quality of life.",
    image: "/services_pictures/Dentures.jpg",
    href: "/services/dentures",
    featured: true,
  },
  {
    title: "Extractions",
    description: "Tooth extractions performed with specialized techniques and sedation options to ensure patient comfort, particularly for those with dental anxiety or special needs.",
    image: "/services_pictures/dental extractions.jpg",
    href: "/services/extractions",
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Featured Services */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Specialties</h2>
            <p className="text-xl text-gray-600">What makes our practice unique in Middle Tennessee</p>
          </div>

          <div className="space-y-16">
            {services.filter(service => service.featured).map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card p-8 h-full">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      href={service.href}
                      className="btn btn-primary inline-flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Information */}
      <section className="py-16">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Patient Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New Patients</h3>
              <p className="text-gray-600 text-sm mb-4">Learn about what to expect on your first visit</p>
              <Link href="/patient-forms" className="text-teal-600 font-medium hover:text-teal-700">
                Learn More
              </Link>
            </div>

            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financing Information</h3>
              <p className="text-gray-600 text-sm mb-4">Flexible payment options available</p>
              <Link href="/contact" className="text-teal-600 font-medium hover:text-teal-700">
                See Our Solutions
              </Link>
            </div>

            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Forms</h3>
              <p className="text-gray-600 text-sm mb-4">Download and complete forms before your visit</p>
              <Link href="/patient-forms" className="text-teal-600 font-medium hover:text-teal-700">
                Get Your Forms
              </Link>
            </div>

            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Instructions</h3>
              <p className="text-gray-600 text-sm mb-4">Pre and post-treatment care instructions</p>
              <Link href="/patient-forms" className="text-teal-600 font-medium hover:text-teal-700">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">Our Dental Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care tailored to meet your unique needs, from special needs dentistry to sedation options and general dental services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="card card-hover group bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
