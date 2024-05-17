import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../../Components/Banner";
import CountrySection from "../../Components/CountrySection";
import Service from "../../Components/Service";
import Spot from "../../Components/Spot";
import TestimonialsSection from "../../Components/Testimonials";
import groovyWalkAnimation from "../../assets/animation.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={groovyWalkAnimation} />
    </div>
  );
};

const Home = () => {
  const data = useLoaderData();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    if (data) {
      setIsDataLoaded(true);
    }
  }, [data]);

  return (
    <div>
      <Banner></Banner>
      <div className="text-center my-8">
        <h6 className="text-center uppercase text-[#fea116] text-2xl font-bold">
          Our Spots
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Explore Our <span className="text-uppercase text-5xl text-[#fea116]">
            <Typewriter
              words={["Tourist Spots", "Favorite Destinations", "Hidden Gems"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      {isDataLoaded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {data.map((list, idx) => (
            <Spot key={idx} data={list} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}
      <CountrySection></CountrySection>
      <TestimonialsSection></TestimonialsSection>
      <Service></Service>
    </div>
  );
};

export default Home;
