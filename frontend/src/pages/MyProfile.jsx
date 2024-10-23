import React from 'react'
import profilepic from '../assets/frontend_assets/profilepic.jpg';

const MyProfile = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto flex">
            
            {/* Left side - Profile Picture and Name */}
            <div className="w-1/3 bg-gray-100 p-8">
              <div className="flex flex-col items-center">
                <img
                  src={profilepic}
                  alt="Profile"
                  className="rounded-full w-32 h-32 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-700">Luna Lambert</h2>
                <p className="text-gray-500">Los Angeles, CA</p>
              </div>
            </div>
    
            {/* Right side - User details */}
            <div className="w-2/3 p-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">User Profile</h3>
              <div className="text-gray-600 mb-6">
                <p className="mb-2"><span className="font-semibold">Phone:</span> +1 (714) 298-3082</p>
                <p className="mb-2"><span className="font-semibold">Email:</span> LunaMLambert@teleworm.us</p>
                <p><span className="font-semibold">Birthday:</span> August 7, 1996</p>
              </div>
              
              <button className="text-red-500 hover:underline focus:outline-none">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      );
}

export default MyProfile