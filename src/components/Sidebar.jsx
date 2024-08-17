import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import PropTypes from "prop-types";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-start p-4 space-y-6 h-full">
      <FaTwitter className="text-blue-500 text-3xl mb-4" />
      <SidebarOption Icon={FaHome} text="Home" />
      <SidebarOption Icon={FaHashtag} text="Explore" />
      <SidebarOption Icon={FaBell} text="Notifications" />
      <SidebarOption Icon={FaEnvelope} text="Messages" />
      <SidebarOption Icon={FaBookmark} text="Bookmarks" />
      <SidebarOption Icon={FaUser} text="Profile" />
      <SidebarOption Icon={FaEllipsisH} text="More" />
      <button className="bg-blue-500 text-white rounded-full py-2 px-4 w-full font-bold mt-6">
        Tweet
      </button>
    </div>
  );
};

const SidebarOption = ({ Icon, text }) => (
  <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-full cursor-pointer w-full">
    <Icon className="text-xl" />
    <h2 className="text-lg font-medium">{text}</h2>
  </div>
);

SidebarOption.propTypes = {
  Icon: PropTypes.elementType.isRequired, // Icon is a component, so elementType is used
  text: PropTypes.string.isRequired, // text should be a string
};

export default Sidebar;
