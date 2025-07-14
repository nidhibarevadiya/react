import React from 'react';

function Profile() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:outline-none focus:border-purple-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:outline-none focus:border-pink-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:outline-none focus:border-red-400 transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Profile;
