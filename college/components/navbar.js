import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black px-[10%] bg-opacity-50 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">
          <div className="text-orange-500 text-2xl font-bold transition-colors duration-300 hover:text-gray-300 cursor-pointer">
            Logo
          </div>
        </Link>
        <div className={`hidden md:block ${isMobile ? "hidden" : ""}`}>
          <ul className="flex space-x-4">
            <NavItemWithDropdown
              text="About"
              dropdownItems={[]}
              showDropdown={showDropdown}
              handleDropdownClose={handleDropdownClose}
            />
            <NavItemWithDropdown
              text="Contact"
              dropdownItems={[]}
              showDropdown={showDropdown}
              handleDropdownClose={handleDropdownClose}
            />
            <NavItemWithDropdown
              text="Courses"
              dropdownItems={["Art", "Science", "History", "Business"]}
              showDropdown={showDropdown}
              handleDropdownClose={handleDropdownClose}
            />
            <NavItemWithDropdown
              text="Home"
              dropdownItems={[]}
              showDropdown={showDropdown}
              handleDropdownClose={handleDropdownClose}
            />
            <NavItemWithDropdown
              text="Resources"
              dropdownItems={[]}
              showDropdown={showDropdown}
              handleDropdownClose={handleDropdownClose}
            />
          </ul>
        </div>
        <div className={`md:hidden ${isMobile ? "" : "hidden"}`}>
          <button
            className="text-white transition-colors duration-300 hover:text-gray-300 cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="bg-orange-500 text-white mt-2 py-2 px-4">
              <NavItem text="About" handleDropdownClose={handleDropdownClose} />
              <NavItem text="Contact" handleDropdownClose={handleDropdownClose} />
              <NavItem
                text="Courses"
                dropdownItems={["Art", "Science", "History", "Business"]}
                handleDropdownClose={handleDropdownClose}
              />
              <NavItem text="Home" handleDropdownClose={handleDropdownClose} />
              <NavItem text="Resources" handleDropdownClose={handleDropdownClose} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItemWithDropdown = ({
  text,
  dropdownItems,
  showDropdown,
  handleDropdownClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleDropdownToggle}
      onMouseLeave={handleDropdownToggle}
    >
      <div className="text-white transition-colors duration-300 hover:text-gray-300 cursor-pointer">
        {text}
      </div>
      {isOpen && showDropdown && dropdownItems.length > 0 && (
        <div className="absolute top-8 left-0 bg-orange-500 text-white p-2 rounded-md">
          {dropdownItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer"
              onClick={() => {
                handleDropdownClose();
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

const NavItem = ({ text, dropdownItems, handleDropdownClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleDropdownToggle}
      onMouseLeave={handleDropdownToggle}
    >
      <div className="text-white transition-colors duration-300 hover:text-gray-300">
        {text}
      </div>
      {isOpen && dropdownItems.length > 0 && (
        <div className="absolute top-0 left-full bg-orange-500 text-white p-2 rounded-md">
          {dropdownItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer"
              onClick={() => {
                handleDropdownClose();
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
