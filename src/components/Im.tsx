import Image from "next/image";

export default function ImageGridSection() {
  // Array of images with their details
  const images = [
    {
      src: "/image.svg", // First image - port with shipping containers
      alt: "Port and Shipping Operations",
      width: 384,
      height: 516
    },
    {
      src: "/image2.svg", // Second image - wooden furniture display
      alt: "Fine Furniture and Woodcraft",
      width: 334,
      height: 516,
      marginTop: true // Add margin-top to this image
    },
    {
      src: "/image3.svg", // Third image - pink/coral colored building
      alt: "Commercial Properties",
      width: 384,
      height: 516
    },
    {
      src: "/image4.svg", // Fourth image - makeup palette
      alt: "Cosmetics and Beauty Products",
      width: 284,
      height: 516,
      marginTop: true // Add margin-top to this image
    }
  ];

  return (
    <section className="pb-[10px] md:pb-0 w-full relative overflow-x-hidden">
      {/* Image grid container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
        <div className="flex gap-1 md:gap-6 h-[155px] md:h-[450px] md:overflow-hidden pb-4 md:pb-0 px-2 md:mx-0 md:px-14">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative w-1/4 h-[140px] md:h-[400px] overflow-hidden ${image.marginTop ? 'mt-[15px] md:mt-[50px]' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-[6px] md:rounded-[14px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}