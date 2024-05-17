import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountrySection = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://go-beyond-server.vercel.app/country")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <section className="bg-white text-gray-800 dark:bg-transparent">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold text-[#FEA116]">Explore Countries</h2>
        <p className="text-gray-600 dark:text-white">Discover the beauty of these countries</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map(country => (
          <CountryCard
            key={country._id}
            imageSrc={country.imageSrc}
            countryName={country.country_Name}
            description={country.description}
          />
        ))}
      </div>
      <div className="py-8"></div>
    </section>
  );
}

const CountryCard = ({ imageSrc, countryName, description }) => {
  return (
    <div className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-[#FEA116] hover:text-white">
      <img src={imageSrc} alt={countryName} className="w-full h-48 object-cover mb-3 rounded-lg" />
      <h3 className="my-3 text-3xl font-semibold group-hover:text-white text-[#0f172b]">{countryName}</h3>
      <div className="space-y-1 leading-tight text-center p-2">
        <p>{description}</p>
      </div>
      <Link to={`/country-spots/${encodeURIComponent(countryName)}`} className="btn bg-[#0f172b] text-white uppercase font-bold mt-4 hover:bg-[#2e3f6b]">
        View Spots
      </Link>
    </div>
  );
}

export default CountrySection;
