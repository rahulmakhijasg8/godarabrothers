'use client'

import FeatureSection from "@/components/FeatureSection";
import FeaturedSection from "@/components/Differentiation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const statsData = [
    { value: "1,800+", label: "Students Educated" },
    { value: "3,500+", label: "Metric Tons of Waste Removed" },
    { value: "2000+", label: "Lives positively impacted" },
    { value: "50+", label: "Community Infrastructure Projects" }
  ];

  interface FeatureSectionData {
    sectionTitle: string;
    sectionTitleLink?: string;
    listItems: Array<{
      title: string;
      description: string;
    }>;
    imageSrc: string;
    imageAlt: string;
    reverseLayout?: boolean;
  }
  
  // Sample data for feature sections
  const featureSectionsData: FeatureSectionData[] = [
    {
      sectionTitle: "Education & Skill Development",
      sectionTitleLink: "/https://www.connectedtoindia.com/nri-in-rajasthan-takes-forward-modis-swachch-bharat-campaign/#google_vignette",
      listItems: [
        {
          title: "Saraswati Vidya Mandir:",
          description: "Established in 2015, providing education to 1,800+ students, with 25% receiving free education."
        },
        {
          title: "Kisan Boarding House:",
          description: "A dedicated institution in Barmer for student development, supported by a ₹1.25 crore donation."
        },
        {
          title: "Women's Education Support:",
          description: "A ₹1.05 crore extension to Kisan Balika Hostel, ensuring rural girls have access to education."
        },
        {
          title: "Scholarships & Libraries:",
          description: "Funding libraries, coaching centers, and competitive exam preparation resources."
        }
      ],
      imageSrc: "/classroom-image.png",
      imageAlt: "Students in a classroom setting with colorful decorations",
      reverseLayout: false
    },
    {
      sectionTitle: "Environmental Sustainability",
      sectionTitleLink: "https://www.connectedtoindia.com/nri-in-rajasthan-takes-forward-modis-swachch-bharat-campaign/#google_vignette",
      listItems: [
        {
          title: "Reservoir Cleaning Initiative:",
          description: "In 2018, a massive cleanup removed 35,000 metric tons of garbage from Kareli Nadi, restoring water access and promoting sustainability."
        },
        {
          title: "Contributions to Swachh Bharat Abhiyan:",
          description: "A ₹20 lakh donation to national cleanliness campaigns."
        }
      ],
      imageSrc: "/environmental-sustainability.png",
      imageAlt: "environmental",
      reverseLayout: true
    },
    {
      sectionTitle: "Community Development",
      sectionTitleLink: "https://www.jatland.com/home/Nawal_Kishor_Godara?utm_source=chatgpt.com",
      listItems: [
        {
          title: "Panchayat Infrastructure:",
          description: "In 2021, a state-of-the-art ₹1.25 crore panchayat building was constructed."
        },
        {
          title: "Financial Support for Development:",
          description: "Donations exceeding ₹1.65 crore to enhance infrastructure across Bhinyad, Kanasar, and Undu villages."
        },
        {
          title: "Prime Minister's Relief Fund:",
          description: "A ₹1 crore contribution towards COVID-19 relief efforts nationwide."
        },
        {
          title: "Employee Welfare Initiative:",
          description: "A ₹10 lakh financial support provided to the family of an employee who lost his life in a road accident."
        }
      ],
      imageSrc: "/community.png",
      imageAlt: "community dev",
      reverseLayout: false
    }
  ];

  return (
    <div>
      <ScrollReveal>
    <div className="border-b border-[#CFC3B8] md:border-[#603812]">
  <section className="text-center px-4 py-12 md:py-24 lg:py-32 max-w-[1440px] mx-auto">
    <div className="max-w-3xl px-4 mx-auto">
      <h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
      >
        <span 
          className="font-['Libre_Baskerville'] font-[700] inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          Building a
        </span>{' '}
        <span className="text-[#603812] font-['Libre_Baskerville'] font-[700] italic inline">Better Future,</span>{' '}
        <span 
          className="font-[700] font-['Libre_Baskerville'] inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
           One Contribution at a Time
        </span>
      </h1>
      
      <p className="text-[#8b7e66] font-['Roboto'] text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6">
        Godara Brothers are dedicated to education, environmental sustainability, and community welfare, transforming countless lives through impactful initiatives.
      </p>
    </div>
  </section>
</div>
</ScrollReveal>
<ScrollReveal>
<div className=" border-t mt-8 md:mt-12 border-[#CFC3B8] md:border-[#603812]">
  <section className="text-center px-4 py-12 md:py-24 lg:py-32 max-w-[1440px] mx-auto">
    <div className="max-w-3xl mx-auto">
      <h1 
        className="text-2xl w-full sm:text-3xl md:text-4xl lg:text-[44px]"
      >
        <span 
          className="font-[700] w-full font-['Libre_Baskerville'] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          About Our</span> <span style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }} className="italic bg-clip-text text-transparent font-[400] font-['Libre_Baskerville']">Philanthropy</span>
       
      </h1>
      
      <p className="text-[#A08871] font-['Roboto'] italic text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6 max-w-[92%] sm:max-w-[95%] md:w-full md:max-w-none px-3 sm:px-0 mx-auto">
        From humble beginnings to a legacy of giving, Nawal Kishore Godara has made a lasting impact through education, environmental conservation, and community development. His initiatives uplift lives and empower future generations.
      </p>
    </div>
  </section>
</div>
</ScrollReveal>
<div className="my-6 border-b border-[#CFC3B8] md:border-[#603812]">
      <div className="flex flex-col border-t border-[#CFC3B8] md:border-[#603812] md:flex-row justify-center items-stretch mx-4 sm:mx-6 md:mx-8 lg:mx-[100px]">
        {statsData.map((stat, index) => {
          // Special conditional for border styling
          const borderClasses = 
            index === statsData.length - 1 
              ? '' // No border for the last item
              : index < statsData.length - 1 
                ? 'border-b md:border-b-0 md:border-r border-[#CFC3B8] md:border-[#603812]' 
                : '';
                
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
            <div 
              key={index}
              className={`
                py-10 md:py-[132px] 
                flex-1 
                flex justify-center items-center
                ${borderClasses}
              `}
            >
              <div className="font-['Libre_Baskerville'] text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#603812]">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl text-[#A08871] font-normal pt-6">
                  {stat.label}
                </div>
              </div>
            </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
    <ScrollReveal>
    <div className="border-t border-[#CFC3B8] md:border-[#603812] mt-6 md:mt-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-12 md:py-11.5">
        <h2 className="text-center text-2xl sm:text-3xl md:text-3xl mb-0 md:mb-5">
          <span className="font-['Libre_Baskerville'] font-[700] inline bg-clip-text text-transparent" style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}>Key</span>{" "}
          <span className="text-[#603812] font-['Libre_Baskerville'] font-[400] italic font-normal">Philanthropic Initiatives</span>
        </h2>
      </div>
    </div>
    </ScrollReveal>
    {featureSectionsData.map((sectionData, index) => (
      <ScrollReveal key={index} delay={index * 0.1}>
        <FeatureSection
          key={index}
          sectionTitle={sectionData.sectionTitle}
          sectionTitleLink={sectionData.sectionTitleLink}
          listItems={sectionData.listItems}
          imageSrc={sectionData.imageSrc}
          imageAlt={sectionData.imageAlt}
          reverseLayout={sectionData.reverseLayout}
        />
        </ScrollReveal>
      ))}
      <ScrollReveal>
    <hr className="mt-12 border-t md:hidden border-[#CFC3B8] md:border-[#603812]" />
    <FeaturedSection mainTitle="Charitable Donations" leftColumn={{
          sectionTitle: "Major Contributions",
          listItems: [
            { 
              title: "₹54.48 lakh", 
              description: "for Sri Gopal Gaushala, Barmer."
            },
            { 
              title: "₹24 lakh", 
              description: "for Veer Tejaji Vikas Samiti, Balotara."
            },
            { 
              title: "₹19.51 lakh", 
              description: "for Shri Ramdevji Avatar Dham Mandir Development."
            },
            { 
              title: "₹15 lakh", 
              description: "to Jat Charitable Trust, Barmer."
            },
            { 
              title: "₹11 lakh ", 
              description: "for free RAS coaching & libraries in Jaipur."
            }
          ]
        }} rightColumn={{
          sectionTitle: "Community Contributions",
          listItems: [
            { 
              title: "₹10 lakh ", 
              description: "for Bal Mandir Sancharini Samiti, Barmer."
            },
            { 
              title: "₹10 lakh", 
              description: "for Fifty Villagers Service Sansthan, Barmer."
            },
            { 
              title: "₹5 lakh", 
              description: "to Rajkiya Balika Uchch Prathmik Vidyalaya, Bhinyad."
            },
            { 
              title: "₹5 lakh", 
              description: "to Jila Shiksha Adhikari Karyalaya, Barmer (for sports infrastructure)."
            }
          ]
        }} />
        </ScrollReveal>
        <ScrollReveal>
      <hr className="mb-12 border-t hidden md:block border-[#CFC3B8] md:border-[#603812]" />
    <div className=" border-t mt-6 md:hidden border-[#CFC3B8] md:border-[#603812]">
  <section className="text-center px-4 py-12 md:py-24 lg:py-32 max-w-[1440px] mx-auto">
    <div className="max-w-3xl mx-auto">
      <h1 
        className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
      >
        <span 
          className="font-bold text-[#603812]"
        >
          Vision
        </span>
      </h1>
      
      <p className="text-[#A08871] font-['Roboto] italic text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6 max-w-[92%] sm:max-w-[95%] md:w-full md:max-w-none px-5 sm:px-0 mx-auto">
      “At Godara Brothers Holdings Limited, we aim to be a global leader in diversified investments, driven by innovation, sustainable growth, and long-term value creation. Our vision is to continuously optimize our portfolio, nurturing new opportunities and expanding across various industries.”
      </p>
    </div>
  </section>
</div>
</ScrollReveal>

<ScrollReveal>
<div className="border-[#603812] md:hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-8 bg-[#EFEBE7]">
  <section className="text-center px-4 py-0 md:py-24 lg:py-32 max-w-[1440px] mx-auto">
    <div className="max-w-3xl mx-auto">
      <h1 
        className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
      >
        <span 
          className="font-bold text-[#603812]"
        >
          Mission
        </span>
      </h1>
      
      <p className="text-[#A08871] font-['Roboto] italic text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6 max-w-[92%] sm:max-w-[95%] md:w-full md:max-w-none px-5 sm:px-0 mx-auto">
      “Our mission is to create value through strategic investments, innovation, and responsible business practices. We strive to uphold excellence in every sector we operate in, ensuring growth for our businesses and stakeholders.”
      </p>
    </div>
  </section>
</div>
<hr className="mb-8 border-t block md:hidden border-[#CFC3B8] md:border-[#603812]" />
</ScrollReveal>
    </div>
  );
}
