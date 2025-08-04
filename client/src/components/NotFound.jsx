import { Link, useNavigate } from "react-router-dom";





export default function NotFound() {

    const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 text-center">
      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg tracking-widest">
        404
      </h1>
      <div className="bg-orange-600/20 text-orange-200 px-4 py-1 text-sm rounded-full rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:rotate-0 cursor-pointer">
        Page Not Found
      </div>
      <p className="mt-16 text-lg md:text-xl max-w-md">
        {"Oops! The page you're looking for doesn't exist or has been moved."}
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="/">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-colors duration-200">
            Go Home
          </button>
        </Link>
        <Link to="/">
         <button  
          onClick={()=>navigate(-1)}
            variant="outline"
            className="px-6 py-3 border-orange-500 text-orange-500 font-semibold rounded-lg shadow-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-colors duration-200 bg-transparent"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}
