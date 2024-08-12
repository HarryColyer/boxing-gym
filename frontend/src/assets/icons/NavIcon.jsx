import PropTypes from "prop-types";

const NavIcon = ({ clicked, setClicked }) => {
  const handleClick = () => setClicked(!clicked);

  return (
    <div onClick={handleClick} className="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12 text-stone-100 cursor-pointer md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  );
};

NavIcon.propTypes = {
  clicked: PropTypes.bool.isRequired,
  setClicked: PropTypes.func.isRequired,
};

export default NavIcon;
