import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const currentSpot = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: currentSpot 
  });

  const onSubmit = (data) => {
    fetch("https://go-beyond-server.vercel.app/user-spots", {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success!',
          text: 'Spot Modified Successfully',
          icon: 'success',
          confirmButtonText: 'Continue'
      })
      }
    })
  };

  return (
    <section className="p-6 bg-[#0f172b] text-grey-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-4 m-auto mb-6">
            <p className="font-bold text-2xl text-center text-[#FEA116]">
              Update Your Favorite Tourist Spot
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="image" className="text-sm">
                Image (URL)
              </label>
              <input
                id="image"
                type="text"
                {...register("image")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="tourists_spot_name" className="text-sm">
                Tourist Spot Name *
              </label>
              <input
                id="tourists_spot_name"
                type="text"
                {...register("tourists_spot_name", { required: true })}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
              {errors.tourists_spot_name && (
                <span className="text-red-500 text-sm">
                  Tourist Spot Name is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="country_Name" className="text-sm">
                Country Name *
              </label>
              <select
                id="country_Name"
                {...register("country_Name", { required: true })}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              >
                <option value="France">France</option>
                <option value="England">England</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Italy">Italy</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Spain">Spain</option>
              </select>
              {errors.country_Name && (
                <span className="text-red-500 text-sm">
                  Country Name is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                id="location"
                type="text"
                {...register("location")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="short_description" className="text-sm">
                Short Description
              </label>
              <textarea
                id="short_description"
                {...register("short_description")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300 resize-none h-20"
              ></textarea>
            </div>
            <div>
              <label htmlFor="average_cost" className="text-sm">
                Average Cost *
              </label>
              <input
                id="average_cost"
                type="text"
                {...register("average_cost", { required: true })}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
              {errors.average_cost && (
                <span className="text-red-500 text-sm">
                  Average Cost is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="seasonality" className="text-sm">
                Seasonality
              </label>
              <input
                id="seasonality"
                type="text"
                {...register("seasonality")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="travel_time" className="text-sm">
                Travel Time
              </label>
              <input
                id="travel_time"
                type="text"
                {...register("travel_time")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="total_visitors_per_year" className="text-sm">
                Total Visitors Per Year
              </label>
              <input
                id="total_visitors_per_year"
                type="text"
                {...register("total_visitors_per_year")}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#FEA116] text-white rounded-md hover:bg-yellow-600 transition-colors duration-300 uppercase font-extrabold my-6"
          >
            Update Place
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateSpot;
