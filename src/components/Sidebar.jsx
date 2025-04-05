import { FiFilter } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800 flex items-center">
        <div className="bg-white p-2 rounded-md mr-3">
          <FiFilter className="text-black" />
        </div>
        <h1 className="text-xl font-bold">Vertxlabs, Inc</h1>
      </div>

      {/* User */}
      <div className="p-4 border-b border-gray-800 flex items-center">
        <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
        <span className="text-gray-400">Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul>
          <li className="px-4 py-3 text-white font-medium">Analytics</li>
          <li className="px-4 py-3 text-gray-400">Connect</li>
          <li className="px-4 py-3 text-gray-400">Dealroom</li>
          <li className="px-4 py-3 text-gray-400">Profile</li>
          <li className="px-4 py-3 text-gray-400">Settings</li>
        </ul>
      </nav>

      {/* Add Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-10 h-10 bg-purple-900 text-white rounded-md flex items-center justify-center">
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
