import { Link } from "react-router-dom";
import logo from "../assets/icons/csmgwc.png";

const HomeButton = () => {
    return (
        <Link to="/">
            <img
                src={logo}
                alt="GWC Home"
                className="
    h-16 w-16 rounded-full
    border-2 border-amaranth
    ring-4 ring-porcelain
    hover:opacity-90
    transition duration-200
  "
            />
        </Link>
    );
};
export default HomeButton;
