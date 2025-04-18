"use client"

import React, { useState } from 'react';
import CompanyComponent from '@/components/CompanyComponent';

const TabSelector = () => {
  const [selectedId, setSelectedId] = useState('india');

  const tabOptions = [
    {
      id: 'india',
      label: 'India',
      content: (
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">India Operations</h3>
          <p className="text-gray-600">
            Our India operations focus on technology development and manufacturing excellence.
            With offices in Bangalore and Mumbai, we've established a strong presence in the region.
          </p>
        </div>
      )
    },
    {
      id: 'africa',
      label: 'Africa',
      content: (
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Africa Projects</h3>
          <p className="text-gray-600">
            Our African initiatives span several countries with a focus on sustainable development
            and community engagement. We have ongoing projects in Kenya, Nigeria, and South Africa.
          </p>
        </div>
      )
    },
    {
      id: 'dubai',
      label: 'Dubai',
      content: (
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Dubai Headquarters</h3>
          <p className="text-gray-600">
            Our Dubai office serves as our global headquarters and strategic hub for Middle Eastern
            operations. From here, we coordinate our international business development efforts.
          </p>
        </div>
      )
    }
  ];

  interface FeatureData {
    sectionTitle: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    sectionTitleLink?: string;
    reverseLayout?: boolean;
  }

  const featuresData = {
    india: [
      {
        sectionTitle: "S G Maart",
        sectionTitleLink: "https://www.sgmaart.com",
        subtitle: "Retail chain",
        description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
        imageSrc: "/sgmaart.jfif",
        imageAlt: "sgmaart",
      },
      {
        sectionTitle: "Laxman Auto",
        subtitle: "Construction and automobiles",
        description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
        imageSrc: "/laxmanauto.jfif",
        imageAlt: "Laxman Auto",
      },
      {
        sectionTitle: "LRT Hotel And Resort LLP",
        subtitle: "Hotel And Resort",
        description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
        imageSrc: "/images/innovation-hub.jpg",
        imageAlt: "LRT hotel",
      },
      {
        sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
        sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
        subtitle: "Education",
        description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
        imageSrc: "/images/innovation-hub.jpg",
        imageAlt: "Saraswati Vidya Mandir",
      }
    ],

    africa:[{
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    },
    {
      sectionTitle: "LRT Hotel And Resort LLP",
      subtitle: "Hotel And Resort",
      description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "LRT hotel",
    },
    {
      sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
      sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
      subtitle: "Education",
      description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "Saraswati Vidya Mandir",
    },
    {
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    },
    {
      sectionTitle: "LRT Hotel And Resort LLP",
      subtitle: "Hotel And Resort",
      description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "LRT hotel",
    },
    {
      sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
      sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
      subtitle: "Education",
      description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "Saraswati Vidya Mandir",
    },
    {
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    },
    {
      sectionTitle: "LRT Hotel And Resort LLP",
      subtitle: "Hotel And Resort",
      description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "LRT hotel",
    },
    {
      sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
      sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
      subtitle: "Education",
      description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "Saraswati Vidya Mandir",
    },
    {
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    }],
    dubai:[{
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    },
    {
      sectionTitle: "LRT Hotel And Resort LLP",
      subtitle: "Hotel And Resort",
      description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "LRT hotel",
    },
    {
      sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
      sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
      subtitle: "Education",
      description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "Saraswati Vidya Mandir",
    },
    {
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
  ]
  }


  const India: FeatureData[] = [
    {
      sectionTitle: "S G Maart",
      sectionTitleLink: "https://www.sgmaart.com",
      subtitle: "Retail chain",
      description: "SG Maart, a well-established retail chain in Rajasthan, India, operates under the company name E2P Maart Private Limited. Renowned for its value-driven offerings, SG Maart provides an extensive range of products, from groceries and apparel to home goods, catering to the varied needs of its customers. With 18 outlets across western Rajasthan, SG Maart has built a strong reputation for offering affordable pricing, particularly in rural areas. Backed by a centralized warehouse, the company ensures streamlined and efficient operations. SG Maart is focused on delivering exceptional value and service to its growing customer base.",
      imageSrc: "/sgmaart.jfif",
      imageAlt: "sgmaart",
    },
    {
      sectionTitle: "Laxman Auto",
      subtitle: "Construction and automobiles",
      description: "Laxman Auto (formerly known as LRAR Infra), incorporated in 2019, is an emerging and dynamic company based in Rajasthan, with plans to operate across two major sectors: construction and automobiles. In the construction and real estate development sector, the company intends to focus on property development, including agricultural land, residential and commercial buildings, as well as large-scale infrastructure projects like roads, bridges, and power plants. We also aim to offer engineering, planning, and consulting services, along with contracting and subcontracting solutions. In the automobile sector, Laxman Auto plans to engage in vehicle sales, leasing, hire purchase, and repair services for a wide range of motor vehicles, including cars, trucks, buses, and electric vehicles.",
      imageSrc: "/laxmanauto.jfif",
      imageAlt: "Laxman Auto",
    },
    {
      sectionTitle: "LRT Hotel And Resort LLP",
      subtitle: "Hotel And Resort",
      description: "LRT Hotel and Resort LLP, incorporated on 12th April 2024 is an exciting hospitality venture based in Jodhpur, Rajasthan. We are dedicated to offering exceptional accommodation and dining experiences, with a focus on delivering a unique blend of comfort, luxury, and personalized service. Our goal is to ensure that every guest enjoys a truly memorable stay. With a vision to become a premier destination for travelers seeking exceptional hospitality, we are committed to building a strong foundation of quality and excellence. As we prepare to launch our services, we eagerly look forward to welcoming guests and creating unforgettable experiences that reflect our passion for hospitality.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "LRT hotel",
    },
    {
      sectionTitle: "Saraswati Vidya Mandir, Bhinyad",
      sectionTitleLink: "https://saraswatividyamandireducationa.godaddysites.com/",
      subtitle: "Education",
      description: "Saraswati Vidya Mandir, Bhinyad, is a prominent educational institution dedicated to nurturing young minds and fostering academic excellence. Located in the heart of Bhinyad, Rajasthan, we are committed to providing a holistic learning environment where students can thrive academically, socially, and personally. Our curriculum is designed to blend traditional values with modern educational practices, ensuring that each student receives a well-rounded education. With a strong focus on discipline, creativity, and critical thinking, Saraswati Vidya Mandir aims to equip students with the knowledge and skills necessary to excel in today's world. Our dedicated team of educators, state-of-the-art facilities, and a supportive learning atmosphere make us a trusted choice for parents seeking quality education for their children.",
      imageSrc: "/images/innovation-hub.jpg",
      imageAlt: "Saraswati Vidya Mandir",
    }
  ];


  return (
    <div className="w-full border-[#CFC3B8] border-t md:border-[#603812] mt-16">
      {/* Tabs container */}
      <div className="flex justify-center mb-6 overflow-x-auto sm:overflow-visible">
        <div className="inline-flex gap-10 mt-4 md:gap-5 p-1">
          {tabOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              className={`
                px-[30px] md:px-[40px] py-2 text-sm font-medium border-[0.5px] border-[#603812] rounded-full transition-all duration-200
                ${selectedId === option.id 
                  ? 'bg-[#EFEBE7] shadow-sm' 
                  : 'bg-transparent text-gray-500 hover:text-gray-700'}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      {India.map((feature, index) => (
            <CompanyComponent
              key={index}
              sectionTitle={feature.sectionTitle}
              subtitle={feature.subtitle}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              sectionTitleLink={feature.sectionTitleLink}
              reverseLayout={index % 2 !== 0} // Alternating layout
            />
          ))}
      <div className="mt-4">
        {tabOptions.find(option => option.id === selectedId)?.content}
      </div>
    </div>
  );
};

export default TabSelector;