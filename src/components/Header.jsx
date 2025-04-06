//src/componnets/Header.jsx

const Header = ({ activeSection }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-800 px-6 py-4">
      <div>
        <span className="text-base font-semibold">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </span>
      </div>
      <div className="flex items-center text-base font-semibold">
        <button className="px-4 py-2 mr-4 ">Activity</button>
        <button className="px-4 py-2 ">Log out</button>
      </div>
    </div>
  );
};

export default Header;
