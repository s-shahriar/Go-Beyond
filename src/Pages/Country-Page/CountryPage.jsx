import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const CountryPage = () => {
  const data = useLoaderData()
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    document.title = "Country Spots";
  }, []);


  const shortenDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  const sortData = (sortBy) => {
    if (sortBy === "default") {
      return data;
    } else if (sortBy === "averageCost") {
      return [...data].sort((a, b) =>
        parseInt(a.average_cost.slice(1)) > parseInt(b.average_cost.slice(1)) ? 1 : -1
      );
    }
  };

  const sortedData = sortData(sortBy);

  return (
    <>
      <div className="text-center my-8">
        <h6 className="text-center uppercase text-[#fea116] text-2xl font-bold">
          POPULAR SPOTS - {data.length > 0 && data[0].country_Name}
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Explore Popular{" "}
          <span className="text-uppercase text-5xl text-[#fea116]">
            <Typewriter
              words={["Tourist Attractions", "Vacation Destinations", "Hidden Gems"]}
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

      <div className="flex justify-center mb-5">
        <div className="relative bg-[#0f172b] rounded-lg">
          <Dropdown label={`Sort By: ${sortBy === "default" ? "Default" : "Average Cost"}`} dismissOnClick={false}>
            <Dropdown.Item className="hover:bg-[#0f172b] text-[#FEA116]" onClick={() => setSortBy("default")}>
              Default
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[#0f172b] text-[#FEA116]" onClick={() => setSortBy("averageCost")}>
              Average Cost
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
        {sortedData.length === 0 ? (
          <div className="text-center text-gray-600 font-bold text-2xl py-8 uppercase">
            No spots found
          </div>
        ) : (
          sortedData.map((spot, index) => (
            <div
              key={index}
              className="room-item shadow rounded overflow-hidden h-full border border-[#fea116]"
            >
              <div className="relative">
                <img
                  className="img-fluid"
                  src={spot?.image || "https://i.ibb.co/rvt7Sdm/image.png"}
                  alt=""
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <small className="absolute start-0 top-full transform -translate-y-1/2 text-white rounded py-1 px-3 ms-4 bg-[#fea116] font-bold">
                  {spot?.average_cost}/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="flex justify-between mb-3">
                  <h5 className="mb-0 font-bold">{spot?.tourists_spot_name}</h5>
                  <div className="flex items-center">
                    <p>{spot?.country_Name}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  <small className="border-end me-3 pe-3 flex items-center">
                    <FaCalendarAlt className="text-[#fea116] mr-2" />
                    {spot?.seasonality}
                  </small>
                  <small className="border-end me-3 pe-3 flex items-center">
                    <FaClock className="text-[#fea116] mr-2" />
                    {spot?.travel_time}
                  </small>
                  <small className="flex items-center">
                    <FaUsers className="text-[#fea116] mr-2" />
                    {spot?.total_visitors_per_year} Visitors/Year
                  </small>
                </div>
                <p className="text-body mb-3">
                  {shortenDescription(spot?.short_description, 150)}
                </p>
                <div className="flex justify-between">
                  <Link to={`/spot_details/${spot?._id}`}
                    className="btn btn-sm btn-primary rounded py-2 px-4 bg-[#fea116] border-0 outline-0 text-white hover:bg-[#fea116]"
                    href="#"
                  >
                    View Detail
                  </Link>
                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4 bg-[#0f172b] border-0 outline-0 text-white hover:bg-[#0f172b]"
                    href="#"
                  >
                    {spot?.location}
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CountryPage;
