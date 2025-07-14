function Error() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg text-center">
        <h1 className="text-7xl font-extrabold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
    </>
  )
}

export default Error