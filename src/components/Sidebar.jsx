const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    "Dashboard",
    "Analytics",
    "Connect",
    "Dealroom",
    "Profile",
    "Settings"
  ];

  return (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="flex border-b border-r border-gray-800">
        {/* Left column with logo */}
        <div className="p-4 flex items-center ">
          <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            <img src={"/logo.png"} alt="Vertx" className="text-black w-5 h-5" />
          </div>
        </div>

        {/* Middle column with company name */}
        <div className="flex-w p-4 text-center">
          <h1 className="text-lg font-bold pt-2">Vertxlabs, Inc</h1>
        </div>

        {/* Right column with empty space */}
        <div className="flex-1"></div>
      </div>

      <div className="flex">
        {/* Left column with user profile */}
        <div className="p-4 flex ">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="User avatar"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
        </div>

        {/* Right column with navigation */}
        <div className="flex-1">
          <nav className="h-full">
            <ul className="h-full flex flex-col justify-between">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`px-4 py-4 cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? "text-white font-bold"
                      : "text-[#555555] font-bold text-base"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
