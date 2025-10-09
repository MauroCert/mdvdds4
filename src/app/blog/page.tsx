import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Special Needs Dentistry: A Comprehensive Guide",
      excerpt: "Learn about the specialized field of special needs dentistry and how it helps patients with intellectual, developmental, and physical disabilities receive the dental care they deserve.",
      image: "/Details/_DSC4016.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Special Needs Dentistry",
      slug: "understanding-special-needs-dentistry"
    },
    {
      title: "Sedation Dentistry: Overcoming Dental Anxiety Safely",
      excerpt: "Discover how sedation dentistry can help patients with dental anxiety, PTSD, and special needs receive comfortable, stress-free dental care while maintaining their oral health.",
      image: "/Details/_DSC4063.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Sedation Dentistry",
      slug: "sedation-dentistry-dental-anxiety"
    },
    {
      title: "Dental Care for Patients with Autism: What Families Should Know",
      excerpt: "Practical tips and insights for families of patients with autism spectrum disorder, including how to prepare for dental visits and what accommodations are available.",
      image: "/Details/_DSC3997.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "November 30, 2024",
      readTime: "7 min read",
      category: "Special Needs Dentistry",
      slug: "dental-care-autism-families"
    },
    {
      title: "The Importance of Regular Dental Check-ups for Special Needs Patients",
      excerpt: "Why routine dental care is crucial for patients with special needs and how early intervention can prevent serious oral health issues down the road.",
      image: "/Details/_DSC4016.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "November 22, 2024",
      readTime: "5 min read",
      category: "Preventive Care",
      slug: "regular-dental-checkups-special-needs"
    },
    {
      title: "Dental Emergencies and Special Needs: What to Do",
      excerpt: "A guide for caregivers and families on recognizing and responding to dental emergencies in patients with special needs, including when to seek immediate care.",
      image: "/Details/_DSC4063.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Emergency Care",
      slug: "dental-emergencies-special-needs"
    },
    {
      title: "Nutrition and Oral Health for Patients with Special Needs",
      excerpt: "How diet and nutrition impact oral health in patients with special needs, and practical tips for maintaining healthy teeth and gums through proper nutrition.",
      image: "/Details/_DSC3997.JPG",
      author: "Dr. Michael D. Vaughan",
      date: "November 8, 2024",
      readTime: "7 min read",
      category: "Nutrition",
      slug: "nutrition-oral-health-special-needs"
    }
  ];

  const categories = ["All", "Special Needs Dentistry", "Sedation Dentistry", "Preventive Care", "Emergency Care", "Nutrition"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
              Dental Health Blog
            </h1>
            <p className="text-lg text-white font-medium max-w-3xl mx-auto">
              Expert insights, tips, and educational content about special needs dentistry, sedation options, and maintaining optimal oral health for all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    index === 0
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full mb-4">
                    Featured Article
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                    Understanding Special Needs Dentistry: A Comprehensive Guide
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn about the specialized field of special needs dentistry and how it helps patients with
                    intellectual, developmental, and physical disabilities receive the dental care they deserve.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">December 15, 2024</span>
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">8 min read</span>
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>Dr. Michael D. Vaughan</span>
                  </div>
                  <Link href="/blog/understanding-special-needs-dentistry" className="btn bg-teal-600 text-white hover:bg-teal-700">
                    Read Full Article
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src="/services_pictures/Special needs dentistry .jpg"
                    alt="Special needs dentistry patient care"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link href={`/blog/${post.slug}`} className="text-teal-600 font-medium hover:text-teal-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-lg text-accent-600 font-medium mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, tips, and insights about special needs dentistry,
              sedation options, and maintaining optimal oral health for all patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="btn bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-base font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">
            Need Personalized Dental Care?
          </h2>
          <p className="text-lg text-accent-600 font-medium mb-8">
            Our experienced team specializes in providing compassionate, specialized dental care for patients
            with special needs, dental anxiety, and unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-base font-medium">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-base font-medium">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
