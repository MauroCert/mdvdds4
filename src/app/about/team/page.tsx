import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Meet Our Team - Michael D. Vaughan, DDS",
  description: "Get to know our caring and dedicated team of dental professionals committed to providing exceptional care.",
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Michael Vaughan",
      role: "Doctor of Dental Surgery",
      image: "/Headshots/e3_DSC4189.JPG",
      bio: [
        "Dr. Vaughan's favorite aunt was a dental assistant. She loved her job and the people she worked with. Seeing someone who loved where she worked and the profession she chose made an impression on him. In high school and college, he loved the sciences and loved learning new things. Dr. Vaughan grew up in Knoxville, TN and attended Vanderbilt University, where he graduated with a Bachelor's Degree in economics. He studied German and History at the University of Regensburg in Germany. Dr. Vaughan graduated from the University of Tennessee College of Dentistry and completed a 2-year general practice residency at Vanderbilt University in 1993.",
        "Dr. Vaughan has been involved in community missions with Generation Changers Church and has led medical mission trips to Mexico, Honduras, Brazil and inner-city Nashville. He met his wife Carla on a mission trip to Brazil in 1999. They stayed friends after the trip and married in 2011.",
        "In his free time, Dr. Vaughan enjoys gardening, growing his orchard, running, hiking in parks and playing tennis with his daughters. Dr. Vaughan would love to skydive one day. He has gone bungee jumping in the past and says skydiving is the next step. His greatest accomplishment is taking care of his three grandchildren, between ages two and five, and getting them back to their parents. Dr. Vaughan loves working with talented people who are working in their area of giftedness. Changing smiles and changing lives brings him satisfaction."
      ]
    },
    {
      name: "Jason Taylor",
      role: "Operations Director",
      image: "/Headshots/e2_DSC4217.JPG",
      bio: [
        "Jason has a passion for people and lives life with the understanding that we were created for community. With a background that spans working with children and adults Jason takes a life on life approach to meet people where they are. Jason started working with IDD adults in 2009 as a support coordinator. Before joining Dr. Vaughan he was the Middle TN Area Director for an ISC company. He has served on the Middle TN planning policy council for IDD services, and he continues to serve as an advocate to improve access to care for the most vulnerable members of society.",
        "Some of Jason's developmental life experiences include living for two years without electricity as an instructor at therapeutic camp. Riding his bicycle coast to coast across the United States. Being a husband and father to his two children and most importantly his faith and relationship with God."
      ]
    },
    {
      name: "Moses Barbalat",
      role: "Technology Director",
      image: "/Headshots/e4_DSC4298.JPG",
      bio: [
        "Moses met Dr. Vaughan some years ago and was amazed at how we were delivering oral care. Moses has been a strong member of our team since he joined. He is our go-to guy for every technological question, problem or concern. He has 12 years of experience working with startup companies. Moses says his biggest accomplishments have been creating high productivity teams, hiring excellent people and creating a nice company culture. He has certainly used his experience to help our Practice grow into the company it is today.",
        "In his free time, Moses enjoys being outside biking, hiking or running. He was a professional athlete in his early years, so he tries to maintain a connection to a healthy life. He one day dreams to swim on the English Channel. Moses says, \"It's been a pleasure to work here. I really want to create the most incredible place for our patients. I know that it will take a lot of work to get there, but I don't see it any other way. We have to improve our world, our community and do good.\""
      ]
    }
  ];

  const coreValues = [
    {
      title: "Complete Communication",
      description: "We believe in being open and honest. As advocates for total transparency in the workplace, we encourage an environment where our friendly team has the confidence to communicate all things appropriate to everyone necessary all the time! We believe that trust, sincerity and collaboration foster strong relationships and inspire us to achieve at the highest level.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Chosen Excellence",
      description: "We actively choose excellence, whether we are answering the phone or performing a clinical procedure. How do we do that? We ask ourselves, \"what is the best way to do what needs to be done?\". We choose excellence because we have a shared vision, and a mutual commitment to achieve our goal of expanding access to oral health care at the individual level. It is also the fact that working at a dental office provides the opportunity to put vital skills to use where they are needed and make a difference to the community.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Initiate Gratefulness",
      description: "We promote and encourage an environment where you get to feel good about yourself and the people you work with. We value the relationships we have and those we come in contact with. We believe that being grateful, even for the small things, fosters a workplace where people want to be and stay.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about/meet-the-team/dentistry-team-office-min.jpg"
            alt="Our caring dental team"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container-padding w-full">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
                Meet Our Team
              </h1>
              <p className="text-lg text-white font-medium max-w-4xl mx-auto">
                Our valued team members are talented, compassionate, and dedicated to expanding
                access to oral health in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="card card-hover p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Spirit */}
      <section className="py-16 lg:py-24 bg-accent-600 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed italic font-medium">
              Each of our team members reflects the spirit of our Practice and our unique values-based approach to oral health. We&apos;re proud of our team and how they work to make us successful in our endeavor to expand access to dental care in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-10 lg:py-16">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Doctors and Management Team</h2>
            <p className="text-lg text-accent-600 font-medium mb-16 text-center">
              Take some time to get to know the people who make our practice special
            </p>
            
            <div className="space-y-20">
              {teamMembers.map((member, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={700}
                        height={840}
                        className="w-full h-auto object-contain bg-gray-100"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-xl text-teal-600 font-medium mb-6">{member.role}</p>
                    <div className="space-y-4">
                      {member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-16 bg-teal-600 text-white">
        <div className="container-padding text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/logo.png"
              alt="Michael D. Vaughan DDS Logo"
              width={180}
              height={180}
              className="brightness-0 invert"
            />
            <h2 className="text-4xl font-bold text-white">Ready to Experience Our Care?</h2>
            <p className="text-lg text-teal-100 font-medium max-w-2xl mx-auto">
              Schedule your consultation today and discover the difference our dedicated team can make in your dental experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-teal-600 hover:bg-gray-100 btn-lg">
                Schedule Consultation
              </Link>
              <Link href="/about" className="btn border-2 border-white text-white hover:bg-white hover:text-teal-600 btn-lg bg-transparent">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

