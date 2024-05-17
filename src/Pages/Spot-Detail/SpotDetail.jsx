import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const estate = {
  title: {
    fontSize: "clamp(1.25rem, 1.912vw + 0.868rem, 2rem)",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "bold",
  },
  value: {
    fontSize: "0.875rem",
  },
};

const SpotDetail = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = `${data.tourists_spot_name} - ${data.location}`;
  }, [data]);

  useEffect(() => {
    document.title = `${data.tourists_spot_name} - ${data.location}`;
  }, []);

  return (
    <div className="container card lg:card-side shadow-2xl flex flex-col lg:flex !items-start mb-10 rounded-lg border-2 bg-[#0f172b] text-white mt-6">
      <figure className="w-full lg:w-1/2 p-4 md:p-8 lg:p-8">
        <img src={data.image || "https://i.ibb.co/rvt7Sdm/image.png"} alt={data.tourists_spot_name} className="rounded-lg" />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2 style={estate.title} className="card-title">
          {data.tourists_spot_name}
        </h2>
        <div className="flex gap-2 mt-3">
          <p style={estate.label} className="text-[#FEA116] flex-grow-0">Country:</p>
          <p style={estate.value}>{data?.country_Name}</p>
        </div>
        <hr className="my-4 border-gray-400" />
        <div>
          <p style={estate.label} className="text-[#FEA116]">Description:</p>
          <p style={estate.value}>{data?.short_description}</p>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="flex gap-2">
          <p style={estate.label} className="text-[#FEA116] flex-grow-0">Average Cost:</p>
          <p style={estate.value}>{data?.average_cost}</p>
        </div>
        <div className="flex gap-2">
          <p style={estate.label} className="text-[#FEA116] flex-grow-0">Seasonality:</p>
          <p style={estate.value}>{data?.seasonality}</p>
        </div>
        <div className="flex gap-2">
          <p style={estate.label} className="text-[#FEA116] flex-grow-0">Total Visitors Per Year:</p>
          <p style={estate.value}>{data?.total_visitors_per_year}</p>
        </div>
        <div className="flex gap-2">
          <p style={estate.label} className="text-[#FEA116] flex-grow-0">Location:</p>
          <p style={estate.value}>{data?.location}</p>
        </div>

        <hr className="my-4 border-gray-400" />
      </div>
    </div>
  );
};

export default SpotDetail;
