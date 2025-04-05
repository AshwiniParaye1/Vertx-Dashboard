import { FiFilter } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
      {/* Logo and User */}
      <div className="p-4 border-gray-800">
        {/* Logo */}
        <div className="flex items-center mb-8  border-gray-800">
          <div className="bg-white p-2 rounded-full mr-3">
            <FiFilter className="text-black" />
          </div>
          <h1 className="text-xl font-bold">Vertxlabs, Inc</h1>
        </div>

        {/* User and Navigation */}
        <div className="flex items-start">
          {/* User */}
          <div className="w-10 h-10 rounded-full mr-3 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="User avatar"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul>
              <li className="px-4 py-2 text-white font-medium">Dashboard</li>
              <li className="px-4 py-2 text-white font-medium">Analytics</li>
              <li className="px-4 py-2 text-gray-500">Connect</li>
              <li className="px-4 py-2 text-gray-500">Dealroom</li>
              <li className="px-4 py-2 text-gray-500">Profile</li>
              <li className="px-4 py-2 text-gray-500">Settings</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
