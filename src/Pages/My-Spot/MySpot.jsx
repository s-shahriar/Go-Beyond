import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MySpot = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    document.title = "My Spots";
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (userEmail) {
      fetch(
        `https://go-beyond-server.vercel.app/user-spots?email=${encodeURIComponent(
          userEmail
        )}`
      )
        .then((res) => res.json())
        .then((data) => setSpots(data));
    }
  }, [userEmail]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Place",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://go-beyond-server.vercel.app/user-spots/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = spots.filter((spot) => spot._id !== id);
              setSpots(remaining);
              Swal.fire({
                title: "Success",
                text: "Place Deleted Successfully",
                icon: "success",
                confirmButtonText: "Continue",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-8">
      <div className="text-center my-8">
        <h6 className="text-center uppercase text-[#fea116] dark:text-white text-2xl font-bold">
          My Spots
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Explore Your{" "}
          <span className="text-uppercase text-5xl text-[#fea116] dark:text-white">
            Tourist Spots
          </span>
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-[#FEA116] text-white">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Spot Name</th>
              <th className="py-2 px-4 border border-gray-300">Country</th>
              <th className="py-2 px-4 border border-gray-300">Location</th>
              <th className="py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {spots.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="py-4 px-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No Spot is found yet......
                </td>
              </tr>
            ) : (
              spots.map((spot) => (
                <tr key={spot._id} className="dark:text-white">
                  <td className="py-2 px-4 border border-gray-300">
                    {spot.tourists_spot_name}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {spot.country_Name}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {spot.location}
                  </td>
                  <td className="py-2 px-4 border border-gray-300 flex justify-center items-center">
                    <Link
                      to={`/update-spot/${spot._id}`}
                      className="btn btn-sm bg-[#0f172b] hover:bg-gray-800 dark:hover:bg-[#FEA116] text-white dark:text-[#FEA116] mr-2"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(spot._id)}
                      className="btn btn-sm bg-[#FEA116] hover:bg-yellow-400 dark:hover:bg-[#0f172b] text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySpot;
