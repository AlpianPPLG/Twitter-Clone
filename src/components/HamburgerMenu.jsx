import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  return (
    <div className="md:hidden relative p-4">
      <button className="text-2xl">
        <FaBars />
      </button>
    </div>
  );
};

export default HamburgerMenu;
