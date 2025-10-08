import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FAQsPage() {
  const faqs = [
    {
      category: "Dental Anxiety & Sedation",
      questions: [
        {
          question: "How do you accommodate patients with dental anxiety?",
          answer: "We specialize in treating patients with dental anxiety and create a calm, supportive environment. Our team takes extra time to explain procedures, answer questions, and ensure you're comfortable throughout your visit. We also offer sedation dentistry options for a completely relaxed experience."
        },
        {
          question: "What is sedation dentistry and how does it work?",
          answer: "Sedation dentistry uses medication to help patients relax during dental procedures. We offer oral sedation (pills), nitrous oxide (laughing gas), and IV sedation. You'll be relaxed and comfortable, with little to no memory of the procedure. Our goal is to make dentistry stress-free and accessible to everyone."
        },
        {
          question: "Is sedation dentistry safe?",
          answer: "Yes, sedation dentistry is very safe when administered by trained professionals like Dr. Vaughan. We carefully evaluate each patient, monitor vital signs throughout the procedure, and follow strict safety protocols. Thousands of patients have benefited from sedation dentistry with excellent outcomes."
        },
        {
          question: "Will I be completely unconscious?",
          answer: "It depends on the type of sedation. With oral sedation and nitrous oxide, you'll be relaxed but conscious. IV sedation provides deeper relaxation where you may not remember the procedure. General anesthesia is rarely needed for dental procedures."
        },
        {
          question: "How long does the sedation effect last?",
          answer: "The duration varies by sedation type. Oral sedation effects typically last 4-6 hours, while nitrous oxide wears off within minutes of stopping. You'll need someone to drive you home after oral or IV sedation."
        }
      ]
    },
    {
      category: "Special Needs Dentistry",
      questions: [
        {
          question: "What is special needs dentistry, and what does it involve?",
          answer: "Special needs dentistry provides comprehensive dental care for patients with neurodivergence, intellectual disabilities, physical challenges, or dental anxiety. We create individualized treatment plans, use specialized techniques, and offer a comfortable environment that accommodates each patient's unique needs and abilities."
        },
        {
          question: "Do you treat patients with autism or ADHD?",
          answer: "Absolutely! We have extensive experience working with patients who have autism, ADHD, and other neurodevelopmental conditions. We understand sensory sensitivities, communication differences, and behavioral considerations, and we adapt our approach to ensure a positive dental experience."
        },
        {
          question: "How do you accommodate patients with physical disabilities?",
          answer: "Our office is designed to be accessible and accommodating. We have a mechanical lift for safe transfers, adjustable equipment, and a patient-centered approach that respects each individual's physical abilities and limitations. We work at your pace to ensure your comfort and safety."
        },
        {
          question: "Do you treat children with special needs?",
          answer: "Yes, we provide specialized dental care for children and adults with special needs. We understand that each patient is unique and work closely with families and caregivers to ensure the best possible experience for every patient."
        },
        {
          question: "What accommodations do you provide for sensory sensitivities?",
          answer: "We offer a sensory-friendly environment with adjustable lighting, noise reduction options, and flexible scheduling. Our team is trained to recognize and respect sensory needs, and we work at each patient's preferred pace to create a comfortable experience."
        }
      ]
    },
    {
      category: "Appointments & Scheduling",
      questions: [
        {
          question: "How can I schedule an appointment?",
          answer: "You can schedule an appointment by calling us at (615) 915-6090, filling out our online contact form, or visiting our office. We offer flexible scheduling and will work with you to find a time that accommodates your needs, including sedation appointments that require specific preparation."
        },
        {
          question: "What should I expect during my first visit?",
          answer: "During your first visit, we'll conduct a comprehensive examination, discuss your dental history and concerns, and create a personalized treatment plan. For patients with special needs or anxiety, we take extra time to build trust and ensure you're comfortable with every aspect of your care."
        },
        {
          question: "Do you accept insurance?",
          answer: "We accept most major dental insurance plans and will work with you to maximize your benefits. Our team will help verify your coverage and explain any out-of-pocket costs before treatment begins. We also offer flexible payment options for uninsured patients."
        },
        {
          question: "What should I bring to my appointment?",
          answer: "Please bring a photo ID, your insurance card (if applicable), a list of current medications, and any completed patient forms. If you have recent dental x-rays from another office, please bring those as well."
        },
        {
          question: "What if I need to cancel or reschedule?",
          answer: "We understand that circumstances change. Please call us at least 24 hours in advance if you need to cancel or reschedule your appointment. This allows us to offer that time to another patient who may need care."
        }
      ]
    },
    {
      category: "Treatment & Procedures",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We provide comprehensive dental services including dental exams and cleanings, root canals, dentures, extractions, and sedation dentistry. We specialize in treating patients with special needs, dental anxiety, neurodivergence, and physical challenges."
        },
        {
          question: "Do you offer emergency dental care?",
          answer: "Yes, we understand that dental emergencies can happen at any time. We provide emergency care for our existing patients and work to accommodate urgent needs. Please call us immediately if you're experiencing a dental emergency."
        },
        {
          question: "How do you handle patients who require extensive dental work?",
          answer: "For patients requiring extensive treatment, we create phased treatment plans that break down care into manageable steps. We often use sedation dentistry to ensure comfort during longer procedures and work closely with each patient to address their specific needs and concerns."
        },
        {
          question: "What is the mechanical lift used for?",
          answer: "Our mechanical lift (Hoyer lift) is available for patients who require assistance with transfers to the dental chair. This ensures safe, dignified positioning for patients with mobility challenges while maintaining their comfort and independence."
        }
      ]
    },
    {
      category: "Practice Information",
      questions: [
        {
          question: "Why should I choose your practice?",
          answer: "We're one of only two practices in Middle Tennessee specializing in sedation and special needs dentistry. Dr. Vaughan has extensive experience and a genuine passion for providing compassionate, individualized care. Our patient-centered approach ensures every patient feels valued, respected, and well-cared for."
        },
        {
          question: "Do you have experience with PTSD and trauma patients?",
          answer: "Yes, Dr. Vaughan specializes in treating patients who have experienced trauma or have PTSD. We understand the unique challenges these patients face and create a safe, supportive environment. Our sedation options and gentle approach help make dental care accessible and stress-free."
        },
        {
          question: "Can families accompany patients during treatment?",
          answer: "Absolutely! We encourage family members or caregivers to be present during consultations and treatment planning. For the actual procedure, we follow each patient's preferences while ensuring safety and optimal care delivery."
        },
        {
          question: "What makes your practice unique in Middle Tennessee?",
          answer: "We are one of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options. Dr. Vaughan has specialized training and extensive experience in treating patients with neurodivergence, intellectual disabilities, physical challenges, and dental anxiety."
        }
      ]
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white font-medium max-w-3xl mx-auto">
              Find answers to common questions about our services, special needs dentistry, sedation options, and what to expect during your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Get Your Questions Answered
            </h2>
            <p className="text-lg text-accent-600 font-medium">
              We understand that visiting the dentist can raise many questions, especially when it comes to
              specialized care like special needs dentistry and sedation. Browse our comprehensive FAQ section
              or contact us directly if you don&apos;t find what you&apos;re looking for.
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-teal-600 px-6 py-4">
                  <h2 className="text-xl font-semibold text-white">{category.category}</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                        <button className="w-full text-left flex items-center justify-between py-4 hover:text-teal-600 transition-colors">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                          <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </button>
                        <div className="hidden pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-teal-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-accent-600 font-medium mb-6">
              Our friendly and knowledgeable team is here to help answer any questions you may have.
              Don&apos;t hesitate to reach out - we&apos;re committed to making your dental experience as comfortable
              and stress-free as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-base font-medium">
                Contact Us
              </Link>
              <Link href="tel:+16159156090" className="btn border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-base font-medium">
                Call (615) 915-6090
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
