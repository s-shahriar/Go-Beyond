import React from 'react';
import { FaBed, FaCompass, FaMountain, FaShuttleVan, FaSwimmer, FaUtensils } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold text-[#FEA116]">Explore Our Services</h2>
        <p className="text-gray-600 dark:text-white">Discover what we offer to make your trip unforgettable</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard icon={<FaBed size={32} />} title="Apartments" description="Find the perfect accommodation to suit your needs and budget. Explore a range of options from cozy rooms to luxurious apartments. Experience comfort and convenience." />
        <ServiceCard icon={<FaUtensils size={32} />} title="Local Cuisine" description="Indulge in a culinary journey with our diverse range of local food. Experience the rich flavors and unique dishes of the region. Savor delicious meals prepared by expert chefs." />
        <ServiceCard icon={<FaMountain size={32} />} title="Adventure Tours" description="Embark on thrilling adventures and explore breathtaking landscapes. Discover hidden gems and experience adrenaline-pumping activities. Create unforgettable memories with our adventure tours." />
        <ServiceCard icon={<FaShuttleVan size={32} />} title="Transportation" description="Enjoy hassle-free transportation options for exploring the area. From airport transfers to guided tours, we've got you covered with comfortable and reliable transportation services." />
        <ServiceCard icon={<FaCompass size={32} />} title="Guided Excursions" description="Discover the wonders of the destination with our knowledgeable guides. Join our guided excursions to explore historical landmarks, cultural sites, and hidden treasures." />
        <ServiceCard icon={<FaSwimmer size={32} />} title="Leisure Activities" description="Unwind and relax with our range of leisure activities. From spa treatments to outdoor adventures, we offer a variety of options to help you recharge and rejuvenate during your trip." />
      </div>
      <div className="py-8"></div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:bg-[#FEA116] hover:text-white">
      <div className="w-8 h-8 text-[#FEA116] mb-3 transition-all duration-300 group-hover:text-white">{icon}</div>
      <h3 className="my-3 text-3xl font-semibold group-hover:text-white">{title}</h3>
      <div className="space-y-1 leading-tight text-center p-2">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Service;
