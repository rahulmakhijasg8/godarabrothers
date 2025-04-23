"use client"

import React, { useState } from 'react';
import CompanyComponent from '@/components/CompanyComponent';

const TabSelector = () => {
  const [selectedId, setSelectedId] = useState<'india' | 'africa' | 'dubai'>('dubai');

  const featuresData = {
    india: [
      {
        sectionTitle: "S G Maart",
        sectionTitleLink: "https://www.sgmaart.com",
        subtitle: "Retail chain",
        description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
        imageSrc: "/india-1.svg",
        imageAlt: "sgmaart",
      },
      {
        sectionTitle: "Laxman Auto",
        subtitle: "Construction and automobiles",
        description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
        imageSrc: "/india-2.svg",
        imageAlt: "Laxman Auto",
      },
      {
        sectionTitle: "LRT Hotel And Resort LLP",
        subtitle: "Hotel And Resort",
        description: "LRT Hotel and Resort, incorporated in 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
        imageSrc: "/india-3.svg",
        imageAlt: "LRT hotel",
      },
      {
        sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
        sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
        subtitle: "Education",
        description: "Saraswati Vidya Mandir, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
        imageSrc: "/Saraswati-Vidya-Mandir.webp",
        imageAlt: "Saraswati Vidya Mandir",
      }
    ],

    africa:[{
      sectionTitle: "Ste NTH Sarl",
      subtitle: "General trading",
      description: "Founded in 2003, Ste NTH has become a leader in the cosmetic industry, driven by the vision of its promoters. The company has experienced remarkable revenue growth, thanks to a dedicated and expanding workforce. Our operations are supported by a robust logistical framework, including well-established warehouses, and a strong retail presence. Located in Kinshasa, DR Congo, Ste NTH is committed to delivering exceptional cosmetic products and services across DR Congo and beyond, upholding the highest standards of quality and customer satisfaction.",
      imageSrc: "/africa-1.png",
      imageAlt: "Ste NTH Sarl",
    },
    {
      sectionTitle: "Apex Group Int’L",
      subtitle: "General trading",
      description: "Apex Group Int'l has been a leader in the import-export sector since 2016, achieving steady growth and a strong turnover. The company thrives thanks to its dedicated team, whose commitment is key to our ongoing success. With a large warehouse supporting our operations, Apex Group Int'l is well-positioned for sustained growth and sustainability. Located in Kinshasa, DR Congo. We remain committed to providing efficient import-export services while upholding the highest standards of customer satisfaction. ",
      imageSrc: "/africa-2.png",
      imageAlt: "Apex Group",
    },
    {
      sectionTitle: "Aqua Beverages",
      subtitle: "Water and Juice Plant",
      description: "Aqua Beverages is a prominent player in the beverage industry, with a large-scale water and juice plant located in Kinshasa, DR Congo. The company has rapidly established itself as a leader in the sector, manufacturing, distributing, and selling a wide range of carbonated soft drinks (CSDs) and a diverse selection of non-carbonated beverages (NCBs), including premium packaged jiuce and drinking water. Our dedicated team plays a vital role in driving the company’s success, supported by a well-equipped warehouse that ensures efficient production and distribution. At Aqua Beverages Sarlu, we are committed to delivering high-quality softdrinks, water and juice products while upholding the highest standards of customer satisfaction.",
      imageSrc: "/africa-3.png",
      imageAlt: "Aqua beverages",
    },
    {
      sectionTitle: "Global Trading",
      subtitle: "Cosmetic",
      description: "Global Trading Congo has quickly established itself as a prominent player in the cosmetic industry since starting operations in 2019. With a strong presence in Brazzaville, Congo, the company has experienced consistent growth. Our dedicated team is supported by a robust logistical framework, including a warehouse and retail stores. Committed to delivering high-quality cosmetic products and services, Global Trading upholds the highest standards of customer satisfaction and continues to expand its reach across Congo and beyond.",
      imageSrc: "/africa-4.png",
      imageAlt: "global trading",
    },
    {
      sectionTitle: "Bravio Commercio",
      subtitle: "Cosmetic",
      description: "Bravio Commercio has quickly become a prominent player in the cosmetic industry since it began operations in 2019. With a strong presence in Angola, the company has experienced consistent growth. Our dedicated team is supported by a robust logistical framework, including a warehouse, and retail stores. Committed to delivering high-quality cosmetic products and services, Bravio Commercio upholds the highest standards of customer satisfaction while expanding its reach across Angola and beyond.",
      imageSrc: "/africa-5.png",
      imageAlt: "Bravio Commercio",
    },
    {
      sectionTitle: "Fourtune Construction",
      subtitle: "Mining",
      description: "Fourtune Construction Congo, located at DR Congo, has been a leading force in the mining industry since its establishment in 2014. The company has steadily grown and now operates with a skilled team of employees. Fourtune Construction’s operations are supported by warehouses and a strong retail presence. We are committed to maintaining high standards in our mining operations while ensuring efficiency, safety, and sustainability. Our team works tirelessly to deliver exceptional results and contribute to the continued success of the company in DR Congo and beyond.",
      imageSrc: "/africa-6.png",
      imageAlt: "Fortune-construction",
    },
    {
      sectionTitle: "Ste SPPC",
      subtitle: "Transport",
      description: "Ste SPPC, based in Kinshasa, DR Congo, has quickly become a key player in the transport industry since its founding in 2021. As a leading provider of smart logistics solutions, we facilitate the smooth flow of trade across DR Congo. Our dedicated team ensures seamless operations, and we empower our people by providing opportunities to excel and grow. Ste SPPC is committed to upholding the highest standards in transport services, driving both the success and expansion of the company throughout DR Congo.",
      imageSrc: "/africa-7.png",
      imageAlt: "STE sppc",
    },
    {
      sectionTitle: "Prestige Group",
      sectionTitleLink: "https://group-pgc.com/index.html",
      subtitle: "Electronics, Construction & Hardware",
      description: "Prestige Group Congo, based in Kinshasa, DR Congo, has been a leading force in the construction and hardware industry since its establishment in 2015. The company has experienced consistent growth and is recognized for its commitment to delivering high-quality products and services. Supported by a dedicated team of employees and a strong operational framework, Prestige Group continues to thrive in both retail and distribution. We are committed to maintaining the highest standards in electronics, construction and hardware solutions while driving the ongoing success and expansion of the company across DR Congo.",
      imageSrc: "/prestigegroup.jpg",
      imageAlt: "Prestige Group",
    },
    {
      sectionTitle: "Africos",
      subtitle: "Cosmetic",
      description: "Africos has rapidly established itself as a leading player in the cosmetic industry since its inception in 2016. With a strong presence in DR Congo, the company has consistently grown, driven by a dedicated team and supported by a robust logistical framework, including a warehouse and retail stores. Committed to delivering high-quality cosmetic products and exceptional services, Africos upholds the highest standards of customer satisfaction and continues to expand its reach across Congo and beyond.",
      imageSrc: "/africa-9.png",
      imageAlt: "Africos",
    },
    {
      sectionTitle: "GARS Associates",
      subtitle: "Electronics",
      description: "GARS Associates, based in Kinshasa, DR Congo, has been a trusted name in the electronics industry since its establishment in 2008. Over the years, the company has built a strong reputation for delivering high-quality electronic products and services, meeting the evolving needs of its customers. With a focus on innovation and customer satisfaction, GARS Associates continues to lead in the electronics sector, providing reliable solutions and exceptional service to clients across DR Congo and beyond.",
      imageSrc: "/africa-10.png",
      imageAlt: "GARS associates",
    },
    {
      sectionTitle: "New Electronics",
      subtitle: "Electronics+Furniture",
      description: "New Electronics, located in Kinshasa, DR Congo, has been a trusted provider of electronics and furniture since its establishment in 2015. The company is committed to offering a wide range of high-quality products designed to meet the diverse needs of our customers. With a focus on innovation and customer satisfaction, New Electronics continues to lead the market by delivering exceptional electronics and furniture solutions. We strive to provide top-notch service, ensuring that each customer experience is seamless and satisfying across DR Congo and beyond.",
      imageSrc: "/africa-11.png",
      imageAlt: "New Electronics",
    },
    {
      sectionTitle: "Nadco Trading Internacional",
      subtitle: "Construction & Hardware",
      description: "Nadco Trading Internacional (Nadco), based in Kinshasa, DR Congo, has quickly become a prominent leader in the construction and hardware industry since its founding in 2020. The company has seen steady growth and is widely recognized for its dedication to providing high-quality products and services. With a committed team and a robust operational framework, Nadco continues to excel in both retail and distribution. We remain focused on upholding the highest standards in construction and hardware solutions while driving the company’s continued success and expansion across DR Congo.",
      imageSrc: "/africa-12.png",
      imageAlt: "Nadco Trading Internacional",
    },
    {
      sectionTitle: "Golden African Resources",
      sectionTitleLink: "https://www.goldendrc.com/",
      subtitle: "Mining of Copper Cathode",
      description: "Golden African Resources, located in Kinshasa, DR Congo, has been a leading force in the mining industry since its establishment in 2007. Specializing in the mining of copper cathodes, the company has steadily grown to become a key player in the sector. With a focus on efficiency, sustainability, and safety, Golden African Resources is committed to maintaining the highest standards in mining operations. Our team works tirelessly to deliver high-quality products while contributing to the continued success and growth of the company both within DR Congo and internationally. The Company has a Manufacturing unit and a Mine in DR Congo.",
      imageSrc: "/africa-13.png",
      imageAlt: "Golden African Resources",
    },
    {
      sectionTitle: "Ste Generale de Forage",
      subtitle: "Drilling and Bore well",
      description: "Ste Generale de Forage (SGF) is established in 2024, based in Kinshasa, DR Congo. Focused on drilling projects, water supply, purification, and related infrastructure development, SGF is committed to delivering high-quality services and contributing to the region's water infrastructure development.",
      imageSrc: "/africa-14.png",
      imageAlt: "Ste Generale de Forage",
    }],
    dubai:[{
      sectionTitle: "Godara Brothers Holdings Limited",
      subtitle: "Investment company",
      description: "Godara Brothers Holdings(Godara Brothers) is the flagship company of the Godara Family Office. With a legacy of strategic investments, Godara Brothers has successfully divested its holdings in a range of group companies across diversified sectors. As a forward-thinking entity, the company continues to focus on optimizing its portfolio, ensuring long-term growth and value creation. Driven by the vision of the Godara family, Godara Brothers remains committed to identifying and nurturing new opportunities for investment while maintaining a strong track record of financial success and corporate responsibility.",
      imageSrc: "/dubai-1.svg",
      imageAlt: "Godra Brothers Holdings Ltd.",
    },
    {
      sectionTitle: "NHT International Trading",
      sectionTitleLink: "https://www.nhtae.com/",
      subtitle: "General trading",
      description: "NHT International Trading, incorporated in 2020 in Jabel Ali Free Zone, is a leading trading company specializing in import, export, and distribution across industries such as consumer goods, industrial supplies, construction materials, automotive products, and technology. With a global network, customer-centric approach, and commitment to quality, the company delivers innovative and efficient trading solutions tailored to client needs. Leveraging the UAE’s strategic location and business-friendly environment, NHT ensures seamless operations and reliable service, driving growth and success for businesses worldwide.",
      imageSrc: "/dubai-2.svg",
      imageAlt: "NHT International Trading",
    },
    {
      sectionTitle: "Lightech Audio Visual Rental",
      sectionTitleLink: "https://lightechav.com/about-us/profile/",
      subtitle: "Event management",
      description: "LighTech Audio Visual Rental (LighTech), based in Dubai, specializes in providing high-quality audio, video, and lighting equipment for corporate, entertainment, and social events. Offering top-tier event production services, they cater to product launches, conferences, concerts, and private parties with industry-standard gear from renowned brands like Yamaha, Shure, and d&b audiotechnik. Whether you're hosting a corporate conference, wedding, or concert, LighTech ensures a seamless and memorable experience with their professional service and reliable equipment rental solutions.",
      imageSrc: "/dubai-3.svg",
      imageAlt: "Lightech audio visual rental",
    },
    {
      sectionTitle: "African Tradex",
      subtitle: "General Trading",
      description: "African Tradex, established in 2015 in Sharjah Free Zone, UAE, is a trusted and dynamic trading company specializing in bridging commerce between Africa, the UAE, and global markets. Leveraging the strategic advantages of the free zone—such as seamless logistics—the company offers a wide range of high-quality products and services, including agricultural goods, manufactured items, and raw materials. With a strong commitment to excellence, customer satisfaction, and reliable trading solutions, African Tradex continues to expand its reach, fostering international trade partnerships and meeting the evolving needs of diverse markets worldwide.",
      imageSrc: "/dubai-4.svg",
      imageAlt: "African Tradex",
    },
    {
      sectionTitle: "GLM General Trading",
      subtitle: "General trading",
      description: "GLM General Trading, based in the UAE, is a trusted and versatile trading company specializing in import, export, and distribution across industries such as construction, consumer goods, automotive, and food products. With a strong global network, efficient logistics, and a customer-centric approach, the company delivers high-quality, tailored solutions to meet the diverse needs of its clients. Committed to excellence, innovation, and reliability, GLM continues to drive growth and success, leveraging the UAE’s strategic location as a global trade hub.",
      imageSrc: "/dubai-5.svg",
      imageAlt: "GLM general tading",
    },
  ]
  }



  return (
    <div className="w-full border-[#CFC3B8] mb-8 md:mb-12 border-b md:border-b-0 border-t md:border-[#603812] mt-16">
      {/* Tabs container */}
      <div className="flex justify-center mb-6 overflow-x-auto sm:overflow-visible">
        <div className="inline-flex gap-10 mt-4 md:gap-5 p-1">
        <button
            onClick={() => setSelectedId('dubai')}
            className={`
              px-[25px] md:px-[40px] py-2 text-sm font-medium border-[0.5px] border-[#603812] rounded-full transition-all duration-200
              ${selectedId === 'dubai' 
                ? 'bg-[#EFEBE7] shadow-sm' 
                : 'bg-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            Dubai
          </button>
          <button
            onClick={() => setSelectedId('africa')}
            className={`
              px-[25px] md:px-[40px] py-2 text-sm font-medium border-[0.5px] border-[#603812] rounded-full transition-all duration-200
              ${selectedId === 'africa' 
                ? 'bg-[#EFEBE7] shadow-sm' 
                : 'bg-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            Africa
          </button>
          <button
            onClick={() => setSelectedId('india')}
            className={`
              px-[25px] md:px-[40px] py-2 text-sm font-medium border-[0.5px] border-[#603812] rounded-full transition-all duration-200
              ${selectedId === 'india' 
                ? 'bg-[#EFEBE7] shadow-sm' 
                : 'bg-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            India
          </button>
        </div>
      </div>

      {/* Content area */}
      {featuresData[selectedId!].map((feature, index) => (
            <CompanyComponent
              key={index}
              sectionTitle={feature.sectionTitle}
              subtitle={feature.subtitle}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              sectionTitleLink={feature.sectionTitleLink}
              reverseLayout={index % 2 !== 0}
            />
          ))}
    </div>
  );
};

export default TabSelector;