import { MoreVertical } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Header = ({ activeSection }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex justify-between items-center border-b border-gray-800 px-6 py-4">
      {/* Active Section (Hidden on Mobile) */}
      {!isMobile && (
        <div>
          <span className="text-base font-semibold">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </span>
        </div>
      )}

      {/* Mobile Only Content */}
      {isMobile && (
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
      )}

      {/* Mobile Only Content */}
      {isMobile && (
        <div className="p-4 flex items-center ">
          {/* <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center"> */}
          <img src={"/logo2.png"} alt="Vertx" className="text-white w-8 h-8" />
          {/* </div> */}
        </div>
      )}

      {/* Buttons and Icon */}
      <div className="flex items-center">
        {!isMobile ? (
          <>
            <button className="px-4 py-2 mr-4">Activity</button>
            <button className="px-4 py-2">Log out</button>
          </>
        ) : (
          <button aria-label="More options">
            <MoreVertical size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
