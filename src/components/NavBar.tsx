
import { Link } from "react-router-dom";
import knowTestLogo from "../assets/images/KnowTestLogo.png";
export default function NavBar() {
  return (
    <nav className="flex items-center justify-between h-fit py-8">
      <img className="max-w-44" src={knowTestLogo} alt="KnowTest Logo" />
      <Link className="bg-indigo-light text-white font-bold py-3 px-6 rounded-md" to="/login">Get Started</Link>
    </nav>
  );
}
