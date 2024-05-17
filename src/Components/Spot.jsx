import React from "react";
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Spot = ({ data }) => {


  const shortenDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };

  return (
    <div className="room-item shadow rounded overflow-hidden h-full border border-[#fea116]">
      <div className="relative">
        <img
          className="img-fluid"
          src={data?.image || "https://i.ibb.co/rvt7Sdm/image.png"}
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <small className="absolute start-0 top-full transform -translate-y-1/2 text-white rounded py-1 px-3 ms-4 bg-[#fea116] font-bold">
          {data?.average_cost}/Night
        </small>
      </div>
      <div className="p-4 mt-2">
        <div className="flex justify-between mb-3">
          <h5 className="mb-0 font-bold">{data.tourists_spot_name}</h5>
          <div className="flex items-center">
            <p>{data?.country_Name}</p>
          </div>
        </div>
        <div className="flex mb-3">
          <small className="border-end me-3 pe-3 flex items-center">
            <FaCalendarAlt className="text-[#fea116] mr-2" />
            {data?.seasonality}
          </small>
          <small className="border-end me-3 pe-3 flex items-center">
            <FaClock className="text-[#fea116] mr-2" />
            {data?.travel_time}
          </small>
          <small className="flex items-center">
            <FaUsers className="text-[#fea116] mr-2" />
            {data?.total_visitors_per_year} Visitors/Year
          </small>
        </div>
        <p className="text-body mb-3">
          {shortenDescription(data?.short_description, 150)}
        </p>
        <div className="flex justify-between">
          <Link
            to={`/spot_details/${data._id}`}
            className="btn btn-sm btn-primary rounded py-2 px-4 bg-[#fea116] border-0 outline-0 text-white hover:bg-[#fea116]"
            href="#"
          >
            View Detail
          </Link>
          <a className="btn btn-sm btn-dark rounded py-2 px-4 bg-[#0f172b] border-0 outline-0 text-white hover:bg-[#1a2538] hover:text-white">
            {data?.location}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spot;
