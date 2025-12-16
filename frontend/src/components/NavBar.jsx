import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const gotoLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className="fixed w-full flex z-40 justify-center mt-4">
      <nav
        className="
          w-[95%] max-w-7xl
          flex items-center justify-between
          px-6 py-4
          rounded-full
          bg-white/70 backdrop-blur-xl
          border border-blue-200
          shadow-md
        "
      >
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="logo" />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="text-emerald-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About Us</li>
          <li className="cursor-pointer hover:text-blue-600">Pages</li>
          <li className="cursor-pointer hover:text-blue-600">Listings</li>
          <li className="cursor-pointer hover:text-blue-600">Shop</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
          <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
        </ul>

        <div className="flex items-center gap-4">
          <select className="hidden sm:block bg-transparent text-gray-700 outline-none">
            <option>English</option>
            <option>Hindi</option>
          </select>

          <button
            className="
              px-5 py-2
              rounded-xl
              bg-blue-600 text-white
              font-medium
              hover:bg-blue-700
              transition
            "
            onClick={gotoLoginPage} 
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
